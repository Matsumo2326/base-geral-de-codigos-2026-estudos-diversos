/* =============================================
   LOGICLAB — Digital Logic Simulator
   script.js
   ============================================= */

'use strict';

// ============================================================
// GATE DEFINITIONS
// ============================================================
const GATES = [
  {
    id: 'AND',
    name: 'AND',
    fullName: 'Porta E',
    color: '#00e5ff',
    inputs: 2,
    formula: 'S = A · B',
    desc: 'A saída é 1 somente quando <strong>todas</strong> as entradas são 1. Funciona como uma série de chaves: todas precisam estar fechadas.',
    fn: (a, b) => a & b,
    truth: [[0,0,0],[0,1,0],[1,0,0],[1,1,1]],
  },
  {
    id: 'OR',
    name: 'OR',
    fullName: 'Porta OU',
    color: '#bf5fff',
    inputs: 2,
    formula: 'S = A + B',
    desc: 'A saída é 1 quando <strong>pelo menos uma</strong> entrada é 1. É como chaves em paralelo: basta uma estar fechada.',
    fn: (a, b) => a | b,
    truth: [[0,0,0],[0,1,1],[1,0,1],[1,1,1]],
  },
  {
    id: 'NOT',
    name: 'NOT',
    fullName: 'Inversor',
    color: '#ff6b00',
    inputs: 1,
    formula: 'S = Ā',
    desc: 'Inverte o sinal de entrada. Se a entrada é 0, a saída é 1 — e vice-versa. Também chamado de <strong>inversor</strong>.',
    fn: (a) => a === 1 ? 0 : 1,
    truth: [[0,1],[1,0]],
  },
  {
    id: 'NAND',
    name: 'NAND',
    fullName: 'Porta NÃO-E',
    color: '#ff2d78',
    inputs: 2,
    formula: 'S = ¬(A · B)',
    desc: 'Negação da AND. A saída é 0 somente quando <strong>todas</strong> as entradas são 1. É uma AND seguida de um NOT.',
    fn: (a, b) => (a & b) === 1 ? 0 : 1,
    truth: [[0,0,1],[0,1,1],[1,0,1],[1,1,0]],
  },
  {
    id: 'NOR',
    name: 'NOR',
    fullName: 'Porta NÃO-OU',
    color: '#ffe000',
    inputs: 2,
    formula: 'S = ¬(A + B)',
    desc: 'Negação da OR. A saída é 1 somente quando <strong>todas</strong> as entradas são 0. É uma OR seguida de um NOT.',
    fn: (a, b) => (a | b) === 1 ? 0 : 1,
    truth: [[0,0,1],[0,1,0],[1,0,0],[1,1,0]],
  },
  {
    id: 'XOR',
    name: 'XOR',
    fullName: 'OU Exclusivo',
    color: '#39ff14',
    inputs: 2,
    formula: 'S = A ⊕ B',
    desc: 'A saída é 1 quando as entradas são <strong>diferentes</strong>. Quando ambas são iguais (00 ou 11), a saída é 0.',
    fn: (a, b) => a ^ b,
    truth: [[0,0,0],[0,1,1],[1,0,1],[1,1,0]],
  },
  {
    id: 'XNOR',
    name: 'XNOR',
    fullName: 'OU Exclusivo Negado',
    color: '#00bfff',
    inputs: 2,
    formula: 'S = ¬(A ⊕ B)',
    desc: 'Negação da XOR. A saída é 1 quando as entradas são <strong>iguais</strong>. Útil para comparadores de igualdade.',
    fn: (a, b) => (a ^ b) === 1 ? 0 : 1,
    truth: [[0,0,1],[0,1,0],[1,0,0],[1,1,1]],
  }
];

// ============================================================
// SVG GATE SYMBOLS
// ============================================================
function gateSymbolSVG(gateId, color = '#00e5ff', w = 64, h = 48) {
  const c = color;
  const sw = 1.8;
  switch(gateId) {
    case 'AND': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="10" y1="14" x2="28" y2="14" stroke="${c}" stroke-width="${sw}"/>
      <line x1="10" y1="34" x2="28" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <line x1="10" y1="14" x2="10" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <path d="M28 14 C42 14 50 18 50 24 C50 30 42 34 28 34 Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="50" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="6" cy="14" r="2" fill="${c}"/>
      <circle cx="6" cy="34" r="2" fill="${c}"/>
      <circle cx="60" cy="24" r="2" fill="${c}" opacity="0.5"/>
    </svg>`;
    case 'OR': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="4" y1="14" x2="20" y2="14" stroke="${c}" stroke-width="${sw}"/>
      <line x1="4" y1="34" x2="20" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <path d="M12 14 Q16 24 12 34 Q22 34 34 24 Q22 14 12 14Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <path d="M34 24 C38 22 44 22 50 24 C44 26 38 26 34 24Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="50" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="4" cy="14" r="2" fill="${c}"/>
      <circle cx="4" cy="34" r="2" fill="${c}"/>
      <circle cx="60" cy="24" r="2" fill="${c}" opacity="0.5"/>
    </svg>`;
    case 'NOT': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="4" y1="24" x2="16" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <polygon points="16,10 16,38 46,24" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <circle cx="49" cy="24" r="4" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="53" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="4" cy="24" r="2" fill="${c}"/>
    </svg>`;
    case 'NAND': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="6" y1="14" x2="22" y2="14" stroke="${c}" stroke-width="${sw}"/>
      <line x1="6" y1="34" x2="22" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <line x1="6" y1="14" x2="6" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <path d="M22 14 C36 14 44 18 44 24 C44 30 36 34 22 34 Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <circle cx="47" cy="24" r="4" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="51" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="2" cy="14" r="2" fill="${c}"/>
      <circle cx="2" cy="34" r="2" fill="${c}"/>
    </svg>`;
    case 'NOR': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="2" y1="14" x2="16" y2="14" stroke="${c}" stroke-width="${sw}"/>
      <line x1="2" y1="34" x2="16" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <path d="M8 14 Q12 24 8 34 Q18 34 30 24 Q18 14 8 14Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <path d="M30 24 C34 22 40 22 44 24 C40 26 34 26 30 24Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <circle cx="47" cy="24" r="4" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="51" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="2" cy="14" r="2" fill="${c}"/>
      <circle cx="2" cy="34" r="2" fill="${c}"/>
    </svg>`;
    case 'XOR': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="2" y1="14" x2="20" y2="14" stroke="${c}" stroke-width="${sw}"/>
      <line x1="2" y1="34" x2="20" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <path d="M8 14 Q12 24 8 34" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <path d="M14 14 Q18 24 14 34 Q24 34 36 24 Q24 14 14 14Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <path d="M36 24 C40 22 46 22 50 24 C46 26 40 26 36 24Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="50" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="2" cy="14" r="2" fill="${c}"/>
      <circle cx="2" cy="34" r="2" fill="${c}"/>
    </svg>`;
    case 'XNOR': return `<svg viewBox="0 0 64 48" width="${w}" height="${h}" fill="none">
      <line x1="2" y1="14" x2="18" y2="14" stroke="${c}" stroke-width="${sw}"/>
      <line x1="2" y1="34" x2="18" y2="34" stroke="${c}" stroke-width="${sw}"/>
      <path d="M6 14 Q10 24 6 34" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <path d="M12 14 Q16 24 12 34 Q22 34 32 24 Q22 14 12 14Z" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <path d="M32 24 C36 22 40 22 43 24" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <circle cx="47" cy="24" r="4" stroke="${c}" stroke-width="${sw}" fill="none"/>
      <line x1="51" y1="24" x2="60" y2="24" stroke="${c}" stroke-width="${sw}"/>
      <circle cx="2" cy="14" r="2" fill="${c}"/>
      <circle cx="2" cy="34" r="2" fill="${c}"/>
    </svg>`;
    default: return '';
  }
}

// ============================================================
// GATE STATE MANAGEMENT
// ============================================================
const gateStates = {};

function initGateState(gateId) {
  gateStates[gateId] = { a: 0, b: 0 };
}

function computeOutput(gate, a, b) {
  return gate.inputs === 1 ? gate.fn(a) : gate.fn(a, b);
}

function toggleInput(gateId, input) {
  gateStates[gateId][input] ^= 1;
  updateGateCard(gateId);
  playClickSound();
}

// ============================================================
// SIMULATOR — CARD RENDERING
// ============================================================
function buildGateCard(gate) {
  initGateState(gate.id);
  const { a, b } = gateStates[gate.id];
  const out = computeOutput(gate, a, b);

  const card = document.createElement('div');
  card.className = 'gate-card';
  card.dataset.gate = gate.id;

  // Build truth table HTML
  const hasTwoInputs = gate.inputs === 2;
  const headerCols = hasTwoInputs ? '<th>A</th><th>B</th><th>SAÍDA</th>' : '<th>A</th><th>SAÍDA</th>';
  const rows = gate.truth.map(row => {
    const cols = hasTwoInputs
      ? `<td class="val-${row[0]}">${row[0]}</td><td class="val-${row[1]}">${row[1]}</td><td class="val-${row[2]}">${row[2]}</td>`
      : `<td class="val-${row[0]}">${row[0]}</td><td class="val-${row[1]}">${row[1]}</td>`;
    return `<tr data-row-a="${row[0]}" data-row-b="${hasTwoInputs ? row[1] : ''}">${cols}</tr>`;
  }).join('');

  // Input rows HTML
  const inputA = `
    <div class="circuit-row">
      <span class="input-label">A</span>
      <button class="input-btn state-${a}" id="btn-${gate.id}-a" onclick="toggleInput('${gate.id}','a')">${a}</button>
      <div class="wire-wrap wire-${a === 1 ? 'active' : 'inactive'}" id="wire-${gate.id}-a">
        <div class="wire-track"></div>
        <div class="wire-pulse"></div>
      </div>
    </div>`;

  const inputB = hasTwoInputs ? `
    <div class="circuit-row">
      <span class="input-label">B</span>
      <button class="input-btn state-${b}" id="btn-${gate.id}-b" onclick="toggleInput('${gate.id}','b')">${b}</button>
      <div class="wire-wrap wire-${b === 1 ? 'active' : 'inactive'}" id="wire-${gate.id}-b">
        <div class="wire-track"></div>
        <div class="wire-pulse"></div>
      </div>
    </div>` : '';

  card.innerHTML = `
    <div class="card-header">
      <div class="gate-symbol">${gateSymbolSVG(gate.id, gate.color)}</div>
      <div class="card-title-wrap">
        <div class="gate-name">${gate.name}</div>
        <div class="gate-fullname">${gate.fullName}</div>
      </div>
    </div>
    <p class="gate-desc">${gate.desc}</p>

    <div class="circuit-panel">
      <div class="circuit-label">▸ CIRCUITO INTERATIVO</div>
      ${inputA}
      ${inputB}
      <div class="output-display" id="output-display-${gate.id}">
        <span class="output-label">SAÍDA</span>
        <div class="output-wire wire-wrap wire-${out === 1 ? 'active' : 'inactive'}" id="wire-${gate.id}-out">
          <div class="wire-track"></div>
          <div class="wire-pulse"></div>
        </div>
        <div class="output-led led-${out}" id="led-${gate.id}"></div>
        <span class="output-value val-${out}" id="output-${gate.id}">${out}</span>
      </div>
    </div>

    <div class="truth-table-wrap">
      <div class="truth-table-title">▸ TABELA VERDADE</div>
      <table class="truth-table" id="table-${gate.id}">
        <thead><tr>${headerCols}</tr></thead>
        <tbody id="tbody-${gate.id}">${rows}</tbody>
      </table>
    </div>
  `;

  return card;
}

function updateGateCard(gateId) {
  const gate = GATES.find(g => g.id === gateId);
  const { a, b } = gateStates[gateId];
  const out = computeOutput(gate, a, b);
  const hasTwoInputs = gate.inputs === 2;

  // Update buttons
  const btnA = document.getElementById(`btn-${gateId}-a`);
  if (btnA) { btnA.textContent = a; btnA.className = `input-btn state-${a}`; }

  if (hasTwoInputs) {
    const btnB = document.getElementById(`btn-${gateId}-b`);
    if (btnB) { btnB.textContent = b; btnB.className = `input-btn state-${b}`; }
  }

  // Update wires
  const wires = ['a', 'b', 'out'];
  wires.forEach(w => {
    const el = document.getElementById(`wire-${gateId}-${w}`);
    if (!el) return;
    const val = w === 'a' ? a : (w === 'b' ? b : out);
    el.className = `wire-wrap wire-${val === 1 ? 'active' : 'inactive'}`;
    if (w === 'out') el.classList.add('output-wire');
  });

  // Update output display
  const outEl = document.getElementById(`output-${gateId}`);
  if (outEl) { outEl.textContent = out; outEl.className = `output-value val-${out}`; }

  const ledEl = document.getElementById(`led-${gateId}`);
  if (ledEl) ledEl.className = `output-led led-${out}`;

  // Update truth table highlight
  const tbody = document.getElementById(`tbody-${gateId}`);
  if (tbody) {
    Array.from(tbody.rows).forEach(row => {
      row.classList.remove('row-active');
      const rowA = parseInt(row.dataset.rowA);
      const rowB = row.dataset.rowB !== '' ? parseInt(row.dataset.rowB) : null;
      const match = hasTwoInputs ? (rowA === a && rowB === b) : (rowA === a);
      if (match) row.classList.add('row-active');
    });
  }

  // Flash animation on output
  const display = document.getElementById(`output-display-${gateId}`);
  if (display) {
    display.style.transition = 'none';
    display.style.boxShadow = out === 1
      ? '0 0 20px rgba(57,255,20,0.3)'
      : '0 0 20px rgba(255,45,120,0.2)';
    setTimeout(() => { display.style.transition = 'all 0.3s'; display.style.boxShadow = ''; }, 300);
  }
}

function renderSimulator() {
  const grid = document.getElementById('gatesGrid');
  grid.innerHTML = '';
  GATES.forEach(gate => grid.appendChild(buildGateCard(gate)));
}

// ============================================================
// REFERENCE SECTION
// ============================================================
function renderReference() {
  const grid = document.getElementById('refGrid');
  if (grid.children.length > 0) return;
  GATES.forEach(gate => {
    const card = document.createElement('div');
    card.className = 'ref-card';
    card.dataset.gate = gate.id;
    card.style.setProperty('--card-accent', gate.color);

    const hasTwoInputs = gate.inputs === 2;
    const headerCols = hasTwoInputs ? '<th>A</th><th>B</th><th>SAÍDA</th>' : '<th>A</th><th>SAÍDA</th>';
    const rows = gate.truth.map(row => {
      const cols = hasTwoInputs
        ? `<td class="val-${row[0]}">${row[0]}</td><td class="val-${row[1]}">${row[1]}</td><td class="val-${row[2]}">${row[2]}</td>`
        : `<td class="val-${row[0]}">${row[0]}</td><td class="val-${row[1]}">${row[1]}</td>`;
      return `<tr>${cols}</tr>`;
    }).join('');

    card.innerHTML = `
      <div class="ref-card-header">
        ${gateSymbolSVG(gate.id, gate.color, 50, 38)}
        <div>
          <div class="ref-card-name">${gate.name}</div>
          <div class="gate-fullname">${gate.fullName}</div>
        </div>
      </div>
      <div class="ref-formula">${gate.formula}</div>
      <p class="gate-desc" style="font-size:0.82rem; margin-bottom:14px;">${gate.desc}</p>
      <table class="truth-table">
        <thead><tr>${headerCols}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
    grid.appendChild(card);
  });
}

// ============================================================
// BUILDER / CIRCUIT CONSTRUCTOR
// ============================================================
let builderNodes = [];
let builderConnections = [];
let draggingNode = null;
let connectingFrom = null;
let dragOffset = { x: 0, y: 0 };
let nodeCounter = 0;

function renderBuilderPalette() {
  const palette = document.getElementById('paletteGates');
  palette.innerHTML = '';
  GATES.forEach(gate => {
    const btn = document.createElement('button');
    btn.className = 'palette-gate-btn';
    btn.innerHTML = `<span class="palette-gate-icon">${gateSymbolSVG(gate.id, gate.color, 28, 20)}</span>${gate.name}`;
    btn.onclick = () => addBuilderNode(gate.id);
    palette.appendChild(btn);
  });
}

function addBuilderNode(gateId) {
  const gate = GATES.find(g => g.id === gateId);
  const id = `node_${nodeCounter++}`;
  const canvas = document.getElementById('builderCanvas');
  const rect = canvas.getBoundingClientRect();

  const node = {
    id,
    gateId,
    gate,
    x: 60 + Math.random() * (rect.width - 200),
    y: 60 + Math.random() * (rect.height - 200),
    inputs: { a: 0, b: gate.inputs === 2 ? 0 : null },
    output: 0,
    connectedA: null,
    connectedB: null,
  };
  builderNodes.push(node);
  renderBuilderNode(node);
  drawBuilderConnections();
}

function renderBuilderNode(node) {
  const gate = node.gate;
  const out = evaluateNode(node);
  const div = document.createElement('div');
  div.className = 'builder-node';
  div.id = node.id;
  div.style.left = node.x + 'px';
  div.style.top = node.y + 'px';

  const outColor = out === 1 ? '#39ff14' : '#ff2d78';
  const inputBRow = gate.inputs === 2 ? `
    <div class="builder-port">
      <div class="port-dot port-in" id="${node.id}-port-b" data-node="${node.id}" data-port="b" title="Entrada B"></div>
      <span>B: <strong>${node.inputs.b}</strong></span>
    </div>` : '';

  div.innerHTML = `
    <div class="builder-node-name">
      ${gate.name}
      <button class="builder-node-del" onclick="removeBuilderNode('${node.id}')" title="Remover">✕</button>
    </div>
    <div class="builder-port">
      <div class="port-dot port-in" id="${node.id}-port-a" data-node="${node.id}" data-port="a" title="Entrada A"></div>
      <span>A: <strong>${node.inputs.a}</strong></span>
    </div>
    ${inputBRow}
    <div class="builder-node-output" style="color:${outColor}; text-shadow:0 0 10px ${outColor};">
      S: ${out}
    </div>
    <div class="builder-port" style="justify-content:flex-end;">
      <span>OUT</span>
      <div class="port-dot port-out" id="${node.id}-port-out" data-node="${node.id}" data-port="out" title="Saída"></div>
    </div>
  `;

  // Drag events
  div.addEventListener('mousedown', e => startDrag(e, node));
  div.addEventListener('touchstart', e => startDrag(e, node), { passive: false });

  // Port click events
  div.querySelectorAll('.port-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      handlePortClick(dot.dataset.node, dot.dataset.port);
    });
  });

  const container = document.getElementById('builderGates');
  const existing = document.getElementById(node.id);
  if (existing) existing.remove();
  container.appendChild(div);
}

function startDrag(e, node) {
  if (e.target.classList.contains('port-dot') || e.target.classList.contains('builder-node-del')) return;
  e.preventDefault();
  draggingNode = node;
  const el = document.getElementById(node.id);
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const rect = el.getBoundingClientRect();
  const canvasRect = document.getElementById('builderCanvas').getBoundingClientRect();
  dragOffset.x = clientX - rect.left;
  dragOffset.y = clientY - rect.top;
}

document.addEventListener('mousemove', handleDrag);
document.addEventListener('touchmove', handleDrag, { passive: false });
document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

function handleDrag(e) {
  if (!draggingNode) return;
  e.preventDefault();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const canvasRect = document.getElementById('builderCanvas').getBoundingClientRect();
  draggingNode.x = clientX - canvasRect.left - dragOffset.x;
  draggingNode.y = clientY - canvasRect.top - dragOffset.y;
  draggingNode.x = Math.max(0, Math.min(canvasRect.width - 130, draggingNode.x));
  draggingNode.y = Math.max(0, Math.min(canvasRect.height - 150, draggingNode.y));
  const el = document.getElementById(draggingNode.id);
  if (el) { el.style.left = draggingNode.x + 'px'; el.style.top = draggingNode.y + 'px'; }
  drawBuilderConnections();
}

function stopDrag() { draggingNode = null; }

function handlePortClick(nodeId, port) {
  const node = builderNodes.find(n => n.id === nodeId);
  if (!node) return;

  if (!connectingFrom) {
    if (port === 'out') {
      connectingFrom = { nodeId, port };
      document.getElementById(`${nodeId}-port-out`).style.boxShadow = '0 0 12px #ffe000';
      updateBuilderInfo('Clique em uma entrada (A ou B) de outra porta para conectar.');
    } else {
      connectingFrom = null;
    }
  } else {
    if (port !== 'out' && nodeId !== connectingFrom.nodeId) {
      // Make connection
      const fromNode = builderNodes.find(n => n.id === connectingFrom.nodeId);
      if (fromNode) {
        builderConnections.push({ from: fromNode.id, to: nodeId, toPort: port });
        // Reset output port style
        const outDot = document.getElementById(`${fromNode.id}-port-out`);
        if (outDot) outDot.style.boxShadow = '';
        connectingFrom = null;
        builderEvaluate();
        updateBuilderInfo('Conexão criada! Continue conectando portas.');
        playClickSound();
      }
    } else {
      // Cancel
      if (connectingFrom) {
        const outDot = document.getElementById(`${connectingFrom.nodeId}-port-out`);
        if (outDot) outDot.style.boxShadow = '';
      }
      connectingFrom = null;
      updateBuilderInfo('Conexão cancelada.');
    }
  }
}

function removeBuilderNode(nodeId) {
  builderNodes = builderNodes.filter(n => n.id !== nodeId);
  builderConnections = builderConnections.filter(c => c.from !== nodeId && c.to !== nodeId);
  const el = document.getElementById(nodeId);
  if (el) el.remove();
  drawBuilderConnections();
}

function evaluateNode(node) {
  const out = node.gate.inputs === 1
    ? node.gate.fn(node.inputs.a)
    : node.gate.fn(node.inputs.a, node.inputs.b);
  node.output = out;
  return out;
}

function builderEvaluate() {
  // Propagate signals through connections
  let iterations = 0;
  while (iterations < 10) {
    let changed = false;
    builderConnections.forEach(conn => {
      const fromNode = builderNodes.find(n => n.id === conn.from);
      const toNode = builderNodes.find(n => n.id === conn.to);
      if (!fromNode || !toNode) return;
      const newVal = fromNode.output;
      if (toNode.inputs[conn.toPort] !== newVal) {
        toNode.inputs[conn.toPort] = newVal;
        changed = true;
      }
      evaluateNode(toNode);
    });
    builderNodes.forEach(n => evaluateNode(n));
    if (!changed) break;
    iterations++;
  }

  // Re-render all nodes
  builderNodes.forEach(node => renderBuilderNode(node));
  drawBuilderConnections();
}

function builderClear() {
  builderNodes = [];
  builderConnections = [];
  connectingFrom = null;
  document.getElementById('builderGates').innerHTML = '';
  drawBuilderConnections();
  updateBuilderInfo('Canvas limpo. Adicione novas portas.');
}

function updateBuilderInfo(msg) {
  const el = document.getElementById('builderInfo');
  if (el) el.textContent = msg;
}

// ============================================================
// CANVAS CONNECTIONS DRAWING
// ============================================================
function drawBuilderConnections() {
  const canvas = document.getElementById('builderCanvas');
  const ctx = canvas.getContext('2d');
  const wrap = canvas.parentElement;
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  builderConnections.forEach(conn => {
    const fromNode = builderNodes.find(n => n.id === conn.from);
    const toNode = builderNodes.find(n => n.id === conn.to);
    if (!fromNode || !toNode) return;

    const fromEl = document.getElementById(`${fromNode.id}-port-out`);
    const toEl = document.getElementById(`${toNode.id}-port-${conn.toPort}`);
    if (!fromEl || !toEl) return;

    const canvasRect = canvas.getBoundingClientRect();
    const fr = fromEl.getBoundingClientRect();
    const tr = toEl.getBoundingClientRect();

    const x1 = fr.left - canvasRect.left + fr.width / 2;
    const y1 = fr.top - canvasRect.top + fr.height / 2;
    const x2 = tr.left - canvasRect.left + tr.width / 2;
    const y2 = tr.top - canvasRect.top + tr.height / 2;

    const signal = fromNode.output;
    const lineColor = signal === 1 ? '#39ff14' : '#ff2d78';
    const glowColor = signal === 1 ? 'rgba(57,255,20,0.3)' : 'rgba(255,45,120,0.2)';

    // Bezier curve
    const cp1x = x1 + (x2 - x1) * 0.5;
    const cp1y = y1;
    const cp2x = x1 + (x2 - x1) * 0.5;
    const cp2y = y2;

    // Glow effect
    ctx.shadowBlur = 12;
    ctx.shadowColor = lineColor;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Arrow at end
    const angle = Math.atan2(y2 - cp2y, x2 - cp2x);
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - 8 * Math.cos(angle - 0.4), y2 - 8 * Math.sin(angle - 0.4));
    ctx.lineTo(x2 - 8 * Math.cos(angle + 0.4), y2 - 8 * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fill();
  });
}

// ============================================================
// BACKGROUND CANVAS — CIRCUIT PARTICLES
// ============================================================
function initBackground() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], lines = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Particle
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#00e5ff' : '#39ff14';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.globalAlpha = (1 - dist / 120) * 0.12;
          ctx.strokeStyle = '#00e5ff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================================
// SOUND ENGINE (Web Audio API)
// ============================================================
let audioCtx = null;

function initAudio() {
  try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
}

function playClickSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = 'square';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.12);
}

// ============================================================
// TUTORIAL
// ============================================================
let tutStep = 0;
const TUT_TOTAL = 3;

function tutNav(dir) {
  tutStep = Math.max(0, Math.min(TUT_TOTAL - 1, tutStep + dir));
  document.querySelectorAll('.t-step').forEach((el, i) => el.classList.toggle('active', i === tutStep));
  document.querySelectorAll('.dot').forEach((el, i) => el.classList.toggle('active', i === tutStep));
  document.getElementById('tutPrev').disabled = tutStep === 0;
  const nextBtn = document.getElementById('tutNext');
  if (tutStep === TUT_TOTAL - 1) {
    nextBtn.textContent = 'Começar! ⚡';
    nextBtn.onclick = closeTutorial;
  } else {
    nextBtn.textContent = 'Próximo →';
    nextBtn.onclick = () => tutNav(1);
  }
}

function closeTutorial() {
  document.getElementById('tutorialOverlay').classList.remove('active');
  initAudio();
}

function openTutorial() {
  tutStep = 0;
  tutNav(0);
  document.getElementById('tutorialOverlay').classList.add('active');
}

// ============================================================
// SECTION SWITCHER
// ============================================================
function switchSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.section === name));
  document.getElementById(name + 'Section').classList.add('active');
  if (name === 'reference') renderReference();
  if (name === 'builder') setTimeout(drawBuilderConnections, 100);
}

// ============================================================
// WINDOW RESIZE — REDRAW CONNECTIONS
// ============================================================
window.addEventListener('resize', () => {
  drawBuilderConnections();
});

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initBackground();
  renderSimulator();
  renderBuilderPalette();

  // First interaction activates audio
  document.addEventListener('click', () => {
    if (!audioCtx) initAudio();
  }, { once: true });
});