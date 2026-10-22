// PureStock 2.0 Web Platform Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Billing Toggle (Monthly / Yearly)
  document.querySelectorAll('[data-billing]').forEach(btn => {
    btn.addEventListener('click', () => {
      const period = btn.dataset.billing;
      document.querySelectorAll('[data-billing]').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      document.querySelectorAll('.price-amount strong').forEach(el => {
        if (el.dataset[period]) el.textContent = el.dataset[period];
      });
      document.querySelectorAll('.price-amount .period').forEach(el => {
        el.textContent = period === 'yearly' ? '/year' : '/month';
      });
      document.querySelectorAll('.billing-detail').forEach(el => {
        if (el.dataset[period]) el.textContent = el.dataset[period];
      });
    });
  });

  // App Screenshots Interactive Showcase Data
  const screenData = {
    inventory: {
      img: 'assets/inventory_screen.png',
      badge: 'Live Master List',
      title: 'Real-Time Inventory Master List',
      desc: 'Keep track of every dental consumable, composite shade, anesthetic carpule, and surgical pack across operatories with clear color-coded stock alerts.',
      features: [
        'Color-coded threshold alerts (Low Stock, Reorder, In Stock)',
        'Batch lot & FIFO expiration date tracking',
        'Custom categories (Restorative, Hygiene, Endo, Surgical, Ortho)',
        'Unit costs and current inventory valuation'
      ]
    },
    orders: {
      img: 'assets/order_screen.png',
      badge: 'Order Pipeline',
      title: 'Automated Replenishment & Doctor Sign-Off',
      desc: 'Low-stock items automatically queue into supplier-grouped order sheets (Henry Schein, Patterson, Darby, Benco) for clinical director sign-off.',
      features: [
        'Supplier-segregated purchase order drafts',
        'Doctor 1-tap review and approval sign-off',
        'Export clean PDF purchase orders for vendor reps',
        'Prevent accidental duplicate orders across team members'
      ]
    },
    scanner: {
      img: 'assets/scanner_screen.png',
      badge: 'Instant Recognition',
      title: 'High-Speed Optical Code Scanner',
      desc: 'Point your iPhone camera at any standard barcode or operatory QR code to immediately pull up stock, increment/decrement usage, or receive stock.',
      features: [
        'Continuous scan mode for quick stockroom audits',
        'Operatory +/- 1 stock count adjustments in seconds',
        'Universal symbology support (UPC, EAN, Code 128, DataMatrix, QR)',
        'Printable custom QR labels for drawers and supply tubs'
      ]
    },
    receiving: {
      img: 'assets/receiving_screen.png',
      badge: 'Check-In & Invoices',
      title: 'Receiving & Invoice Photo Cloud Archive',
      desc: 'Reconcile incoming boxes against pending orders. Mark backorders with one tap, snap physical packing slips, and archive them safely in the cloud.',
      features: [
        'Match incoming packages against pending POs',
        'Automatic backorder tracking until fulfilled',
        'Snap & store high-resolution paper invoice photos',
        'Eliminate missing paper receipts during accountant tax audits'
      ]
    },
    sterilization: {
      img: 'assets/sterilization_screen.png',
      badge: 'Clinical Compliance',
      title: 'Sterilization & Autoclave Logbook',
      desc: 'Ditch the paper binder. Log daily autoclave cycles, chemical indicator results, and weekly spore test biological indicators with technician signatures.',
      features: [
        'Daily autoclave cycle logs with temperature/pressure checks',
        'Weekly Biological Indicator (BI spore test) tracking & incubator alerts',
        'Technician operator signatures and instrument load notes',
        'Instant 1-click PDF compliance reports for state dental board inspections'
      ]
    },
    pureai: {
      img: 'assets/pure_ai_screen.png',
      badge: 'Hands-Free Operatory AI',
      title: 'PureAI Voice & Natural Language Assistant',
      desc: 'When your gloves are on in the operatory, talk to PureAI. Check supply levels, add items to the reorder list, or look up expiry dates completely hands-free.',
      features: [
        'Dental terminology recognition (Filtek, Lidocaine, Alginate, CaviWipes)',
        'Conversational inventory queries ("How many boxes of size 4 covers left?")',
        'Safe explicit confirmation before modifying inventory lists',
        'Instant rollback & undo support for all automated actions'
      ]
    },
    settings: {
      img: 'assets/settings_screen.png',
      badge: 'Practice Security',
      title: 'Role-Based Access & Practice Controls',
      desc: 'Configure multi-chair operatory spaces, manage staff access tiers (Practice Owner, Associate Dentist, Assistant), and maintain total privacy.',
      features: [
        'Role-Based Access Control (RBAC) with Doctor approval locks',
        'Instant account & cloud data deletion (Apple Guideline 5.1.1(v))',
        'Year-end inventory valuation & annual usage analytics',
        'Encrypted cloud synchronization across all clinic iPhones'
      ]
    }
  };

  function activateScreen(key) {
    const data = screenData[key];
    if (!data) return;

    const screenBtns = document.querySelectorAll('[data-screen]');
    screenBtns.forEach(b => b.classList.toggle('active', b.dataset.screen === key));

    const screenImg = document.getElementById('activeScreenImg');
    const screenBadge = document.getElementById('activeScreenBadge');
    const screenTitle = document.getElementById('activeScreenTitle');
    const screenDesc = document.getElementById('activeScreenDesc');
    const screenFeatures = document.getElementById('activeScreenFeatures');

    if (screenImg) {
      screenImg.style.opacity = '0';
      setTimeout(() => {
        screenImg.src = data.img;
        screenImg.alt = data.title;
        if (screenBadge) screenBadge.textContent = data.badge;
        if (screenTitle) screenTitle.textContent = data.title;
        if (screenDesc) screenDesc.textContent = data.desc;
        if (screenFeatures) {
          screenFeatures.innerHTML = data.features.map(f => `<li><span class="check">✓</span> ${f}</li>`).join('');
        }
        screenImg.style.opacity = '1';
      }, 140);
    }
  }

  // Tab buttons click listener
  document.querySelectorAll('[data-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      activateScreen(btn.dataset.screen);
    });
  });

  // Links from Module Cards to Showcase
  document.querySelectorAll('[data-jump-screen]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.jumpScreen;
      activateScreen(target);
      const stage = document.getElementById('app-screens');
      if (stage) {
        stage.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- INTERACTIVE FEATURES IN THE 6 MODULES ---

  // Module 02: Scanner +/- adjustment demo
  const scanQtyVal = document.getElementById('scanDemoQty');
  const scanMinus = document.getElementById('scanDemoMinus');
  const scanPlus = document.getElementById('scanDemoPlus');
  if (scanQtyVal && scanMinus && scanPlus) {
    let currentQty = 12;
    scanMinus.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentQty > 0) {
        currentQty -= 1;
        scanQtyVal.textContent = currentQty;
        scanQtyVal.classList.add('flash-change');
        setTimeout(() => scanQtyVal.classList.remove('flash-change'), 300);
      }
    });
    scanPlus.addEventListener('click', (e) => {
      e.stopPropagation();
      currentQty += 1;
      scanQtyVal.textContent = currentQty;
      scanQtyVal.classList.add('flash-change');
      setTimeout(() => scanQtyVal.classList.remove('flash-change'), 300);
    });
  }

  // Module 03: Doctor Sign-Off Interactive Button
  const signBtn = document.getElementById('doctorSignBtn');
  if (signBtn) {
    let signed = false;
    signBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      signed = !signed;
      if (signed) {
        signBtn.innerHTML = '✓ Signed by Dr. Davis <span style="font-size:11px; opacity:0.8;">(Ready to Send)</span>';
        signBtn.classList.add('is-signed');
      } else {
        signBtn.innerHTML = 'Doctor Sign-Off <span>↗</span>';
        signBtn.classList.remove('is-signed');
      }
    });
  }

  // Module 04: Receiving Checklist Items
  document.querySelectorAll('.receiving-check-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      item.classList.toggle('checked');
      const box = item.querySelector('.check-box');
      if (box) {
        box.textContent = item.classList.contains('checked') ? '✓' : '';
      }
    });
  });

  // Module 05: Spore Test Indicator Toggle
  const sporeBadge = document.getElementById('sporeTestToggle');
  if (sporeBadge) {
    let passed = true;
    sporeBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      passed = !passed;
      if (passed) {
        sporeBadge.className = 'visual-badge green';
        sporeBadge.innerHTML = '● Spore Test: PASS (Click to toggle)';
      } else {
        sporeBadge.className = 'visual-badge red';
        sporeBadge.innerHTML = '▲ Spore Test: INCUBATING (Click to toggle)';
      }
    });
  }

  // Module 06: Role Permission Selector
  const roleButtons = document.querySelectorAll('.role-pill-btn');
  const roleDescEl = document.getElementById('rolePermDesc');
  const roleDescriptions = {
    owner: {
      role: 'Practice Owner / Lead Doctor',
      perms: 'Full System Access • PO Review & Sign-Off • Pricing & Vendor Contract Edits • Delete Practice Data'
    },
    assistant: {
      role: 'Lead Dental Assistant / Staff',
      perms: 'Supply Catalog Management • Receiving & Backorders • Sterilization & Autoclave Logs • Low Stock Alerts'
    },
    hygienist: {
      role: 'Clinical Staff / Hygienist',
      perms: 'Operatory Supply Usage (-1) • Barcode Quick Scan • Cycle Lookups • Zero Financial/Vendor Access'
    }
  };

  roleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const role = btn.dataset.role;
      if (roleDescEl && roleDescriptions[role]) {
        roleDescEl.innerHTML = `<strong>${roleDescriptions[role].role}</strong><span>${roleDescriptions[role].perms}</span>`;
      }
    });
  });

  // FAQ Accordion (Support Page)
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) {
        const isOpen = item.classList.contains('open');
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      }
    });
  });

  // Smooth TOC scrolling on Legal pages
  document.querySelectorAll('.legal-nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelectorAll('.legal-nav-list a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
});
