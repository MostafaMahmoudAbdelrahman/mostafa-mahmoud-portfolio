// ─── Project gallery (home: featured 6, case studies: all with filters) ─────
// Content lives in projects-data.js. Mount with <div class="gx" data-gallery="featured|all"></div>.
(() => {
    const P = window.PROJECTS || [];
    const mounts = document.querySelectorAll('[data-gallery]');
    if (!P.length || !mounts.length) return;

    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const TABS = [['all', 'All'], ['mobile', 'Mobile'], ['vr', 'VR'], ['web', 'Web & Simulation'], ['unreal', 'Unreal Engine']];
    const canHover = window.matchMedia('(hover: hover)').matches;

    const card = p => `
        <article class="gx-card" tabindex="0" role="button" aria-haspopup="dialog" data-id="${p.id}" aria-label="Open ${esc(p.name)}">
            <div class="gx-media">
                <img src="${p.cover}" width="960" height="540" alt="${esc(p.name)} cover" loading="lazy">
                <video src="${p.preview}" muted loop playsinline preload="none" aria-hidden="true"></video>
                <span class="gx-badge gx-${p.cats[0]}">${esc(p.badge)}</span>
                <span class="gx-play">▶ Video</span>
            </div>
            <div class="gx-body">
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.tagline)}</p>
                <div class="gx-meta"><span>${esc(p.spec.Platform)}</span><span>${esc(p.spec.Year)}</span><span class="gx-award">${esc(p.award)}</span></div>
            </div>
        </article>`;

    // one shared modal
    const modal = document.createElement('dialog');
    modal.className = 'gx-modal';
    modal.innerHTML = '<button class="gx-close" type="button" aria-label="Close">✕</button><div class="gx-mbody"></div>';
    document.body.appendChild(modal);
    const mbody = modal.querySelector('.gx-mbody');
    const stop = () => mbody.querySelectorAll('iframe').forEach(f => f.remove());

    function open(id) {
        const p = P.find(x => x.id === id); if (!p) return;
        const spec = Object.entries(p.spec).map(([k, v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('');
        const links = p.links.map(([t, u]) => `<a href="${esc(u)}"${u.includes('.html') ? '' : ' target="_blank" rel="noopener noreferrer"'}>${esc(t)} →</a>`).join('');
        mbody.innerHTML = `
            <div class="gx-mmedia"><iframe src="https://www.youtube.com/embed/${p.yt}?autoplay=1&rel=0&playsinline=1" title="${esc(p.name)}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div class="gx-in">
                <div class="gx-head"><img class="gx-logo" src="${p.logo}" alt="${esc(p.name)}"><p>${esc(p.tagline)}</p></div>
                <div class="gx-cols">
                    <div><p>${esc(p.desc)}</p><h4>Highlights</h4><ul>${p.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul></div>
                    <div><div class="gx-spec">${spec}</div><div class="gx-links">${links}</div></div>
                </div>
                <h4>Screenshots</h4>
                <div class="gx-shots">${p.shots.map(s => `<a href="${s}" target="_blank" rel="noopener"><img src="${s}" alt="${esc(p.name)} screenshot" loading="lazy"></a>`).join('')}</div>
            </div>`;
        modal.showModal();
        history.replaceState(null, '', '#' + id);
    }
    const close = () => { stop(); if (modal.open) modal.close(); history.replaceState(null, '', location.pathname + location.search); };
    modal.querySelector('.gx-close').addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    modal.addEventListener('close', stop);

    mounts.forEach(m => {
        const all = m.dataset.gallery === 'all';
        const list = all ? P : P.filter(p => p.featured).sort((a, b) => a.featured - b.featured);
        m.innerHTML = (all ? `<div class="gx-tabs" role="tablist">${TABS.map(([k, t], i) =>
            `<button type="button" role="tab" data-cat="${k}" class="${i ? '' : 'on'}" aria-selected="${!i}">${t}</button>`).join('')}</div>` : '') +
            `<div class="gx-grid">${list.map(card).join('')}</div>`;
        const grid = m.querySelector('.gx-grid');
        grid.addEventListener('click', e => { const c = e.target.closest('.gx-card'); if (c) open(c.dataset.id); });
        grid.addEventListener('keydown', e => { const c = e.target.closest('.gx-card'); if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(c.dataset.id); } });
        if (canHover) {
            const live = (c, on) => { const v = c.querySelector('video');
                if (on) v.play().then(() => c.classList.add('live')).catch(() => {}); else { v.pause(); v.currentTime = 0; c.classList.remove('live'); } };
            grid.addEventListener('mouseover', e => { const c = e.target.closest('.gx-card'); if (c) live(c, true); });
            grid.addEventListener('mouseout', e => { const c = e.target.closest('.gx-card'); if (c && !c.contains(e.relatedTarget)) live(c, false); });
        }
        const tabs = m.querySelector('.gx-tabs');
        if (tabs) tabs.addEventListener('click', e => {
            const b = e.target.closest('button'); if (!b) return;
            tabs.querySelectorAll('button').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); });
            grid.querySelectorAll('.gx-card').forEach(c => {
                const p = P.find(x => x.id === c.dataset.id);
                c.hidden = !(b.dataset.cat === 'all' || p.cats.includes(b.dataset.cat));
            });
        });
    });

    const h = location.hash.slice(1);
    if (h && P.some(p => p.id === h)) open(h);
})();
