// App initialization and Interactive Graph Logic
let network = null;
let allNodes = [];
let allEdges = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initGraph();
  initProjectsGrid();
  setupEventListeners();
});

function initGraph() {
  const container = document.getElementById('codeGraphNetwork');

  allNodes = [...portfolioGraphData.nodes];
  allEdges = [...portfolioGraphData.edges];

  const nodes = new vis.DataSet(allNodes);
  const edges = new vis.DataSet(allEdges);

  const data = { nodes, edges };

  const options = {
    groups: {
      project: {
        color: {
          background: '#3b82f6',
          border: '#60a5fa',
          highlight: { background: '#60a5fa', border: '#93c5fd' }
        },
        font: { color: '#ffffff', face: 'Inter', size: 14, bold: true }
      },
      skill: {
        color: {
          background: '#10b981',
          border: '#34d399',
          highlight: { background: '#34d399', border: '#6ee7b7' }
        },
        font: { color: '#ffffff', face: 'Inter', size: 12 }
      },
      concept: {
        color: {
          background: '#a855f7',
          border: '#c084fc',
          highlight: { background: '#c084fc', border: '#e9d5ff' }
        },
        font: { color: '#cbd5e1', face: 'Inter', size: 11 }
      }
    },
    nodes: {
      shape: 'dot',
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.5)',
        size: 10,
        x: 0,
        y: 4
      },
      borderWidth: 2
    },
    edges: {
      color: {
        color: '#334155',
        highlight: '#38bdf8',
        hover: '#38bdf8'
      },
      width: 1.5,
      smooth: {
        type: 'continuous'
      },
      font: {
        color: '#64748b',
        size: 9,
        face: 'Fira Code',
        align: 'middle'
      }
    },
    physics: {
      stabilization: true,
      barnesHut: {
        gravitationalConstant: -3500,
        springConstant: 0.04,
        springLength: 95
      }
    },
    interaction: {
      hover: true,
      tooltipDelay: 150,
      navigationButtons: false,
      keyboard: true
    }
  };

  network = new vis.Network(container, data, options);

  // Click handler
  network.on('click', (params) => {
    if (params.nodes.length > 0) {
      const selectedId = params.nodes[0];
      selectNode(selectedId);
    }
  });

  // Double click resets focus
  network.on('doubleClick', (params) => {
    if (params.nodes.length > 0) {
      focusOnNode(params.nodes[0]);
    }
  });
}

function selectNode(nodeId) {
  const node = allNodes.find((n) => n.id === nodeId);
  if (!node) return;

  const titleEl = document.getElementById('nodeTitle');
  const typeEl = document.getElementById('nodeType');
  const descEl = document.getElementById('nodeDescription');
  const connSection = document.getElementById('connectionSection');
  const connList = document.getElementById('connectionsList');
  const showcaseEl = document.getElementById('projectShowcase');

  titleEl.textContent = node.label;
  typeEl.textContent = node.group;
  typeEl.className = `badge ${node.group}`;
  descEl.textContent = node.description || "No specific description available.";

  // Find connected nodes
  const connectedNodeIds = network.getConnectedNodes(nodeId);
  if (connectedNodeIds.length > 0) {
    connSection.style.display = 'block';
    connList.innerHTML = '';
    connectedNodeIds.forEach((cId) => {
      const cNode = allNodes.find((n) => n.id === cId);
      if (cNode) {
        const btn = document.createElement('button');
        btn.className = 'tag-btn';
        btn.textContent = `${cNode.label} (${cNode.group})`;
        btn.onclick = () => focusOnNode(cId);
        connList.appendChild(btn);
      }
    });
  } else {
    connSection.style.display = 'none';
  }

  // If it's a project node, show extra details
  if (node.group === 'project') {
    showcaseEl.style.display = 'block';
    const highlightsList = document.getElementById('projectHighlights');
    highlightsList.innerHTML = '';
    if (node.highlights && node.highlights.length) {
      node.highlights.forEach((h) => {
        const li = document.createElement('li');
        li.textContent = h;
        highlightsList.appendChild(li);
      });
    }

    const ghBtn = document.getElementById('projectGithub');
    const demoBtn = document.getElementById('projectDemo');
    ghBtn.href = node.github || '#';
    demoBtn.href = node.demo || '#';
  } else {
    showcaseEl.style.display = 'none';
  }
}

function focusOnNode(nodeId) {
  network.selectNodes([nodeId]);
  network.focus(nodeId, {
    scale: 1.3,
    animation: {
      duration: 600,
      easingFunction: 'easeInOutQuad'
    }
  });
  selectNode(nodeId);
}

function initProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  const projects = allNodes.filter((n) => n.group === 'project');

  projects.forEach((proj) => {
    // Find associated tech
    const connected = allEdges
      .filter((e) => e.from === proj.id || e.to === proj.id)
      .map((e) => (e.from === proj.id ? e.to : e.from));

    const techBadges = connected
      .map((id) => allNodes.find((n) => n.id === id))
      .filter((n) => n && n.group === 'skill')
      .map((n) => `<span class="chip">${n.label}</span>`)
      .join('');

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="card-top">
        <h4>${proj.label}</h4>
        <p>${proj.description}</p>
        <div class="card-tags">
          ${techBadges}
        </div>
      </div>
      <div class="card-footer">
        <span>Inspect on Code Graph</span>
        <span>→</span>
      </div>
    `;

    card.addEventListener('click', () => {
      // Scroll smoothly to graph and highlight node
      window.scrollTo({ top: 0, behavior: 'smooth' });
      focusOnNode(proj.id);
    });

    grid.appendChild(card);
  });
}

function setupEventListeners() {
  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-chip');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilter(currentFilter);
    });
  });

  // Search input
  const searchInput = document.getElementById('nodeSearch');
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    if (!term) {
      applyFilter(currentFilter);
      return;
    }
    const filteredNodes = allNodes.filter((n) =>
      n.label.toLowerCase().includes(term) ||
      (n.description && n.description.toLowerCase().includes(term))
    );
    updateGraphData(filteredNodes);
  });

  // Reset Button
  const resetBtn = document.getElementById('resetGraphBtn');
  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterBtns.forEach((b) => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    applyFilter('all');
    network.fit({
      animation: { duration: 600, easingFunction: 'easeInOutQuad' }
    });
  });
}

function applyFilter(filter) {
  let filteredNodes = allNodes;
  if (filter !== 'all') {
    filteredNodes = allNodes.filter((n) => n.group === filter);
  }
  updateGraphData(filteredNodes);
}

function updateGraphData(nodesList) {
  const visibleNodeIds = new Set(nodesList.map((n) => n.id));
  const filteredEdges = allEdges.filter(
    (e) => visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to)
  );

  network.setData({
    nodes: new vis.DataSet(nodesList),
    edges: new vis.DataSet(filteredEdges)
  });
}

