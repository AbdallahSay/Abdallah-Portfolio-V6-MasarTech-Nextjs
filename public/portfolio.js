if (!window.__abdallahPortfolioBooted) {window.__abdallahPortfolioBooted = true;

    // PROJECT DATA — replace copy and illustration mockups with verified screenshots before public launch.
    const projects = [
      {id:1, title:'WatsStore', category:'COMMERCE / SAAS', types:['saas','commerce','systems'],year:'2026',slug:'wats',status:'Live website',tech:['Next.js','ASP.NET Core','WhatsApp','RTL / Arabic'],desc:'A WhatsApp-first storefront builder for merchants in Egypt. From online catalogs and product discovery to checkout messages that arrive as structured WhatsApp orders. A full-stack commerce product built with Arabic-first UX.',url:'https://github.com/AbdallahSay/watsstore-saas',live:'https://frontend-bay-ten-58.vercel.app/'},
      {id:2, title:'Nabra Studio', category:'AI / CREATIVE TOOLS', types:['ai','systems'],year:'2026',slug:'nabra',status:'GitHub project',tech:['React 19','TypeScript','Gemini AI','Audio Tools'],desc:'An AI-powered voice and creative studio exploring audio transcription, an Egyptian voice workflow, ad-script generation, and team-review flows. Designed to help creatives move from raw audio to usable content.',url:'https://github.com/AbdallahSay/Nabra'},
      {id:3, title:'FactoryPulse', category:'SAAS / INDUSTRIAL',types:['saas','systems'],year:'2026',slug:'factory',status:'In development',tech:['ASP.NET Core','EF Core','Excel / OneDrive','SQL Server'],desc:'A modular factory operations SaaS for data imports, KPIs, inventory and customer statement workflows. Designed with distinct domain, application, infrastructure and web layers.',url:'https://github.com/AbdallahSay/FactoryPulse'},
      {id:4, title:'Digital Menu', category:'SAAS / HOSPITALITY',types:['saas','commerce'],year:'2026',slug:'menu',status:'In development',tech:['Angular','.NET 10','SQL Server','QR Menu'],desc:'A multi-restaurant platform for view-only digital menus. Stable QR entry points, restaurant-owned menu content, mobile-first experience and a security-focused SaaS architecture.',url:'https://github.com/AbdallahSay/digital-menu-saas'},
      {id:5, title:'Bab Al Hara', category:'COMMERCE / OPERATIONS',types:['commerce','systems'],year:'2026',slug:'bab',status:'In development',tech:['Angular 22','ASP.NET Core','SQL Server','Real-time kitchen'],desc:'A bilingual restaurant platform with customer menus, persistent cart, guest checkout and an authenticated real-time kitchen queue. The first customer-to-kitchen slice is implemented.',url:'https://github.com/AbdallahSay/bab-al-hara-restaurant-platform'},
      {id:6, title:'Quote Generator',category:'SYSTEMS / DOCUMENTS',types:['systems','automation'],year:'2026',slug:'quotes',status:'GitHub project',tech:['ASP.NET Core','OpenXML','PDF','GitHub Actions'],desc:'An industrial quotation platform that fills existing Word document templates, produces PDF outputs and supports sales workflows, auditability and automated deployment.',url:'https://github.com/AbdallahSay/factory-quote-generator'},
      {id:7, title:'Paperform',category:'PRODUCT / CREATIVE TOOLS',types:['systems'],year:'2026',slug:'paper',status:'GitHub project',tech:['React','Vite','Tiptap','PDF.js'],desc:'A browser-based bilingual document workspace for editing PDFs, managing pages and exporting Word, PowerPoint and PDF documents — with local browser storage.',url:'https://github.com/AbdallahSay/pdf-template-editor'},
      {id:8, title:'Pharmacy API',category:'BACKEND / SYSTEMS',types:['systems'],year:'2026',slug:'pharma',status:'GitHub project',tech:['.NET 9','Clean Architecture','JWT','SQL Server'],desc:'A pharmacy-management API with medicine inventory, expiry monitoring, sales, reporting and role-based authentication.',url:'https://github.com/AbdallahSay/pharmacy-management-system'},
      {id:9, title:'TeacherOS',category:'SAAS / EDUCATION',types:['saas','systems'],year:'2026',slug:'teacher',status:'Foundation stage',tech:['.NET 10','EF Core','SQL Server','Clean Architecture'],desc:'A multi-tenant education SaaS foundation with modular architecture and identity/tenancy infrastructure. The product features are still planned; this showcase reflects the engineering foundation only.',url:'https://github.com/AbdallahSay/TeacherOs'}
    ];
    const barVals=['33%','59%','47%','77%','56%','88%','69%','94%'];
    function poster(slug){
      const contents={
        wats:`<div class="wats-poster"><div class="pw-glow"></div><div class="pw-window"><div class="pw-head"><span>WATS<span style="color:#78edb9">✳</span>STORE</span><small>YOUR STORE IS ONLINE ●</small></div><div class="pw-heading">SELL MORE.<br><em>CHAT SMARTER.</em></div><div class="pw-products"><div><b>✦</b><small>COLLECTION 01</small></div><div><b>◈</b><small>COLLECTION 02</small></div><div><b>⬡</b><small>COLLECTION 03</small></div></div><div class="pw-footer">○ SIMPLE CATALOG &nbsp; → &nbsp; ◉ WHATSAPP ORDERS</div></div><div class="pw-chip">01 / LIVE PRODUCT</div></div>`,
        nabra:`<div class="nabra-poster"><div class="np-top">NABRA<span>™</span> <small>CREATIVE SOUND LAB</small></div><div class="np-orbit"></div><div class="np-title">SOUND<br><em>HAS A</em><br>STORY.</div><div class="np-wave">${Array.from({length:30},(_,i)=>`<i style="height:${14+Math.abs(Math.sin(i*1.2)*54)}px"></i>`).join('')}</div><div class="np-foot">VOICE / TRANSCRIPTION / AI STUDIO</div></div>`,
        bab:`<div class="bab-poster"><div class="bp-brand">باب الحارة <span>BAB AL HARA / RESTAURANT</span></div><div class="bp-circle">✳</div><div class="bp-title">FRESH<br><em>TO TABLE.</em></div><div class="bp-tiles"><div>01 <span>MENU</span></div><div>02 <span>CHECKOUT</span></div><div>03 <span>KITCHEN</span></div></div></div>`,
        paper:`<div class="paper-poster"><div class="pp-panel left"><div class="pp-top">PAPERFORM. <span>▣</span></div><div class="pp-tools">FILE &nbsp; EDIT &nbsp; VIEW &nbsp; EXPORT</div><div class="pp-page"><b>DOCUMENT / 2026</b><i></i><i></i><i></i><i></i><div class="pp-signature">Aa.</div></div></div><div class="pp-panel right">EXPORT <br> ANY<br> IDEAS.<span>PDF / DOCX / PPTX</span></div></div>`,
        pharma:`<div class="pharma-poster"><div class="ph-head">MEDICINE / API <span>◉ SECURE</span></div><div class="ph-cross">+</div><div class="ph-bottom"><b>BETTER DATA.<br><em>BETTER CARE.</em></b><small>INVENTORY — SALES — ANALYTICS</small></div><div class="ph-capsule">▰▰</div></div>`,
        teacher:`<div class="teacher-poster"><div class="tp-grid"></div><div class="tp-tag">TEACHER OS / INFRASTRUCTURE</div><div class="tp-orb">O<span>S</span></div><h3>BUILDING<br>THE BASE.</h3><div class="tp-foot">TENANCY &nbsp; ↗ &nbsp; IDENTITY &nbsp; ↗ &nbsp; MODULAR ARCHITECTURE</div></div>`,
        factory:`<div class="factory-panel"><div class="factory-bar"><b>FACTORY / COMMAND</b><span>● CONNECTED</span></div><div class="factory-body"><div><div class="fact-kpi"><small>PRODUCTION</small><b>84.2K</b></div><div class="fact-kpi"><small>ORDERS</small><b>1,280</b></div><div class="fact-kpi"><small>GROWTH</small><b>+18%</b></div></div><div class="fact-graph">${barVals.map(v=>`<i style="--bar-height:${v}"></i>`).join('')}</div></div></div>`,
        menu:`<div class="menu-orbit"></div><div class="mock-phone"><div class="phone-notch"></div><div class="phone-logo">BASIL & CO.</div><div class="phone-title">The Menu.</div><div class="phone-hero"></div><div class="phone-row"><b>Signature dishes</b><span>VIEW ALL ↗</span></div><div class="phone-row"><span>Truffle Pasta</span><b>320</b></div><div class="phone-row"><span>Garden Salad</span><b>185</b></div></div>`,
        quotes:`<div class="quote-paper"><div class="quote-top">PROPOSAL. <span>NO. 026</span></div><div class="quote-label">QUOTATION / SUMMARY</div><div class="quote-line"></div><div class="quote-line short"></div><div class="quote-table"><div><i></i><i></i><i></i></div><div><i></i><i></i><i></i></div><div><i></i><i></i><i></i></div><div><i></i><i></i><i></i></div></div><div class="quote-stamp">READY TO SEND ↗</div></div>`,
        auto:`<div class="auto-board"><div class="auto-wire w1"></div><div class="auto-wire w2"></div><div class="auto-wire w3"></div><div class="auto-node one"><small>TRIGGER_01</small><b>Excel Update</b></div><div class="auto-node two"><small>PROCESS_02</small><b>Transform</b></div><div class="auto-node three"><small>FORMAT_03</small><b>Generate PDF</b></div><div class="auto-node four"><small>OUTPUT_04</small><b>Notify ↗</b></div></div>`,
        statements:`<div class="stmt-glow"></div><div class="stmt-sheet"><div class="stmt-header">BALANCE REPORT <span>2026 / 10</span></div><div class="stmt-row"><span>CLIENT</span><span>DEBIT</span><span>BALANCE</span></div>${[1,2,3,4,5].map((x)=>`<div class="stmt-row"><span>CLIENT_00${x}</span><span>— — —</span><span>${(x*1270).toLocaleString('en-US')}</span></div>`).join('')}<div class="stmt-row total"><span>TOTAL</span><span>EGP</span><span>19,050</span></div><div class="stamp-note">SAMPLE DATA / NOT A REAL REPORT</div></div>`
      };
      return `<div class="poster-scene poster-${slug}">${contents[slug]}</div>`;
    }
    const track=document.getElementById('filmTrack');
    const indexList=document.getElementById('indexList');
    const filmCounter=document.getElementById('filmCounter');
    let filtered=projects.slice(),currentFilter='all',currentView='film';
    const holes=`<div class="film-holes" aria-hidden="true">${Array.from({length:12},()=>'<i></i>').join('')}</div>`;
    function renderProjects(){
      filtered=projects.filter(p=>currentFilter==='all'||p.types.includes(currentFilter));
      track.innerHTML=filtered.map(p=>`<button class="film-card" data-open="${p.id}" aria-label="View ${p.title} details">${holes}<div class="film-window">${poster(p.slug)}<span class="film-index">AS / ${String(p.id).padStart(2,'0')}</span><span class="poster-arrow" aria-hidden="true">↗</span></div>${holes}<div class="film-caption"><span><strong>${p.title}</strong><small>${p.category}</small></span><em>${p.year} ↗</em></div></button>`).join('');
      indexList.innerHTML=filtered.map(p=>`<button class="index-row" data-open="${p.id}" aria-label="View ${p.title} details"><span>${String(p.id).padStart(2,'0')} /</span><strong>${p.title}</strong><span class="kind">${p.category}</span><span aria-hidden="true">↗</span></button>`).join('');
      document.querySelector('[data-filter="all"]').textContent=`ALL [${String(projects.length).padStart(2,'0')}]`;
      updateCounter();
    }
    function updateCounter(){
      const count=filtered.length;
      if(!count){filmCounter.textContent='NO PROJECTS';return;}
      const card=track.querySelector('.film-card'); const stride=card?card.getBoundingClientRect().width+14:1;
      const index=Math.max(1,Math.min(count,Math.round(track.scrollLeft/stride)+1));
      filmCounter.textContent=`FRAME ${String(index).padStart(2,'0')} — ${String(count).padStart(2,'0')} / DRAG TO EXPLORE`;
    }
    document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
      currentFilter=btn.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(b=>{let selected=b===btn;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});
      renderProjects();track.scrollLeft=0;
    }));
    function setView(view){currentView=view;document.getElementById('filmContent').classList.toggle('hidden',view==='index');indexList.classList.toggle('show',view==='index');document.getElementById('filmToggle').classList.toggle('active',view==='film');document.getElementById('indexToggle').classList.toggle('active',view==='index');document.getElementById('filmToggle').setAttribute('aria-pressed',String(view==='film'));document.getElementById('indexToggle').setAttribute('aria-pressed',String(view==='index'))}
    document.getElementById('filmToggle').addEventListener('click',()=>setView('film'));document.getElementById('indexToggle').addEventListener('click',()=>setView('index'));
    function galleryScroll(dir){const card=track.querySelector('.film-card');track.scrollBy({left:dir*((card?.getBoundingClientRect().width||350)+14),behavior:'smooth'})}
    document.getElementById('prevBtn').addEventListener('click',()=>galleryScroll(-1));document.getElementById('nextBtn').addEventListener('click',()=>galleryScroll(1));track.addEventListener('scroll',updateCounter,{passive:true});
    let startX=0,scrollStart=0,dragging=false,dragged=false;
    track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button===0){startX=e.clientX;scrollStart=track.scrollLeft;dragging=true;dragged=false;}});
    window.addEventListener('pointermove',e=>{if(!dragging)return;let dx=e.clientX-startX;if(Math.abs(dx)>5){dragged=true;track.scrollLeft=scrollStart-dx;}});
    window.addEventListener('pointerup',()=>{if(dragging){dragging=false;if(dragged)setTimeout(()=>{dragged=false},80);}});
    const modal=document.getElementById('projectModal');const modalClose=document.getElementById('modalClose');let previousFocus=null;
    function openProject(id){
      const p=projects.find(x=>x.id===Number(id));if(!p)return;
      previousFocus=document.activeElement;
      document.getElementById('modalNumber').textContent=`PROJECT / ${String(p.id).padStart(2,'0')}`;
      document.getElementById('modalCategory').textContent=p.category;
      document.getElementById('modalTitle').textContent=p.title;
      document.getElementById('modalDescription').textContent=p.desc;
      document.getElementById('modalTags').innerHTML=p.tech.map(t=>`<span>${t}</span>`).join('');
      document.getElementById('modalVisual').innerHTML=poster(p.slug);
      const link=document.getElementById('modalLink');link.hidden=!p.url;if(p.url){link.href=p.url;link.innerHTML='VIEW GITHUB REPO <span>↗</span>'}
      const liveLink=document.getElementById('modalLive');liveLink.hidden=!p.live;if(p.live)liveLink.href=p.live;
      document.getElementById('modalStage').textContent=p.status;
      document.getElementById('caseStudyLink').href='/projects/'+({wats:'watsstore',nabra:'nabra-studio',factory:'factorypulse',menu:'digital-menu',bab:'bab-al-hara',quotes:'quote-generator',paper:'paperform',pharma:'pharmacy-api',teacher:'teacheros'}[p.slug]||p.slug);
      modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modalClose.focus();
    }
    function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(previousFocus?.focus)previousFocus.focus()}
    document.addEventListener('click',e=>{const card=e.target.closest('[data-open]');if(card){if(dragged)return;openProject(card.dataset.open)}});
    modalClose.addEventListener('click',closeProject);modal.addEventListener('mousedown',e=>{if(e.target===modal)closeProject()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeProject();if(modal.classList.contains('open')&&e.key==='Tab'){const f=[modalClose,...modal.querySelectorAll('a:not([hidden])')];const i=f.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}if(!modal.classList.contains('open')&&document.activeElement===track&&e.key==='ArrowRight'){e.preventDefault();galleryScroll(1)}if(!modal.classList.contains('open')&&document.activeElement===track&&e.key==='ArrowLeft'){e.preventDefault();galleryScroll(-1)}});
    const menuBtn=document.getElementById('menuBtn');const mainNav=document.getElementById('mainNav');menuBtn.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰'});mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));
    const reveals=document.querySelectorAll('.reveal');if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.08});reveals.forEach(el=>io.observe(el))}else reveals.forEach(el=>el.classList.add('visible'));
    function tick(){document.getElementById('cairoClock').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Cairo',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())}
    document.getElementById('currentYear').textContent=new Date().getFullYear();tick();setInterval(tick,30000);
    const heroArt=document.getElementById('heroArt');heroArt.addEventListener('pointermove',e=>{if(window.matchMedia('(pointer:fine)').matches){const r=heroArt.getBoundingClientRect();heroArt.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*19+'px');heroArt.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*19+'px')}});heroArt.addEventListener('pointerleave',()=>{heroArt.style.setProperty('--mx','0px');heroArt.style.setProperty('--my','0px')});
    // V2: self-contained projected 3D geometry (not a flat CSS animation).
    // Uses real 3D coordinates, depth projection and pointer-controlled rotations.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer:fine)');
    const orbitCanvas = document.getElementById('orbitCanvas');
    const orbitSwitch = document.getElementById('orbitSwitch');
    const orbitContext = orbitCanvas?.getContext('2d', {alpha: true});
    let orbitState = {a:0.5, b:0.16, tx:0,ty:0,active:true, immersive:false,raf:0,frame:0};
    const knot=[];
    // Parametric torus-knot-like 3D curve, 320 points; geometry comes from equations, not a raster image.
    for(let i=0;i<=320;i++){
      const t=i/320*Math.PI*4;
      const r=1.55+.51*Math.cos(3*t);
      knot.push([r*Math.cos(2*t),r*Math.sin(2*t),.86*Math.sin(3*t)]);
    }
    const satellites=Array.from({length:55},(_,i)=>{
      const theta=(i*2.399963229728653),z=(i%19/9)-1;
      const rad=2.65+Math.sin(i*2.3)*.6;
      return [Math.cos(theta)*rad,Math.sin(theta)*rad,z*.75];
    });
    const cam={w:1,h:1,dpr:1};
    function resizeOrbit(){
      if(!orbitContext)return;
      const r=orbitCanvas.getBoundingClientRect();
      if(r.width===0||r.height===0)return;
      cam.dpr=Math.min(window.devicePixelRatio||1,2);cam.w=r.width;cam.h=r.height;
      orbitCanvas.width=Math.floor(r.width*cam.dpr);
      orbitCanvas.height=Math.floor(r.height*cam.dpr);
      orbitContext.setTransform(cam.dpr,0,0,cam.dpr,0,0);
      if(reducedMotion.matches)drawOrbit();
    }
    function project3(point){
      const [x,y,z]=point, ay=orbitState.a,ax=orbitState.b;
      const cy=Math.cos(ay),sy=Math.sin(ay),cx=Math.cos(ax),sx=Math.sin(ax);
      const x1=x*cy-z*sy, z1=x*sy+z*cy;
      const y1=y*cx-z1*sx, z2=y*sx+z1*cx;
      const distance=7.9;
      const projection=distance/(distance-z2);
      const scale=Math.min(cam.w*.105,cam.h*.17)*(orbitState.immersive?1.45:1.12);
      return [cam.w*.51+x1*projection*scale,cam.h*.49+y1*projection*scale,z2,projection];
    }
    function drawOrbit(){
      if(!orbitContext)return;
      const ctx=orbitContext;const w=cam.w,h=cam.h;
      ctx.clearRect(0,0,w,h);
      // depth-graded line segments; the knot is rotationally projected every frame
      const segs=[];
      for(let i=0;i<knot.length-1;i++){
        const p=project3(knot[i]),q=project3(knot[i+1]);segs.push([p,q,(p[2]+q[2])*.5]);
      }
      segs.sort((a,b)=>a[2]-b[2]);
      ctx.lineWidth=orbitState.immersive?2.1:1.4;
      for(const [p,q,z] of segs){
        const bright=Math.max(0,Math.min(1,(z+2.5)/5.0));
        ctx.beginPath();ctx.moveTo(p[0],p[1]);ctx.lineTo(q[0],q[1]);
        ctx.strokeStyle=`rgba(${Math.round(125+90*bright)},${Math.round(200+50*bright)},${Math.round(100+65*bright)},${(.17+.74*bright).toFixed(3)})`;
        ctx.stroke();
      }
      const radius=Math.min(w,h)*.38;
      ctx.save();ctx.translate(w*.51,h*.49);ctx.strokeStyle='rgba(191,245,159,.09)';ctx.setLineDash([3,8]);ctx.lineWidth=1;
      ctx.beginPath();ctx.ellipse(0,0,radius*1.05,radius*.47,orbitState.a,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);ctx.restore();
      for(let i=0;i<satellites.length;i++){
        const p=project3(satellites[i]),br=Math.max(0,Math.min(1,(p[2]+3)/6));
        ctx.fillStyle=`rgba(201,255,162,${(.11+.4*br).toFixed(3)})`;
        ctx.beginPath();ctx.arc(p[0],p[1],(.5+br*1.7)*p[3],0,Math.PI*2);ctx.fill();
      }
      if(orbitState.immersive){
        ctx.strokeStyle='rgba(195,255,145,.24)';ctx.lineWidth=1;
        const rr=Math.min(w,h)*.37;
        ctx.strokeRect(w*.51-rr,h*.49-rr,rr*2,rr*2);
        ctx.font='10px monospace';ctx.fillStyle='rgba(210,255,189,.8)';
        ctx.fillText('3D // SPATIAL ARCHIVE',w*.51-rr+12,h*.49-rr+23);
        ctx.fillText('DRAG CURSOR TO ROTATE',w*.51-rr+12,h*.49+rr-16);
      }
    }
    let canvasVisible=true;
    const observer3d=('IntersectionObserver' in window)?new IntersectionObserver(entries=>{canvasVisible=entries[0]?.isIntersecting??false;},{threshold:.05}):null;
    if(observer3d)observer3d.observe(orbitCanvas);
    function animate3d(){
      if(!reducedMotion.matches && canvasVisible && !document.hidden){
        orbitState.frame++;
        orbitState.a+=(.0033+(orbitState.tx-orbitState.a)*.003);
        orbitState.b+=(Math.sin(orbitState.frame*.005)*.00095+(orbitState.ty-orbitState.b)*.018);
        drawOrbit();
      }
      orbitState.raf=requestAnimationFrame(animate3d);
    }
    if(orbitContext){resizeOrbit();if(reducedMotion.matches)drawOrbit();else animate3d();window.addEventListener('resize',resizeOrbit,{passive:true});}
    heroArt.addEventListener('pointermove',e=>{
      if(!finePointer.matches)return;
      const rect=heroArt.getBoundingClientRect();const nx=((e.clientX-rect.left)/rect.width-.5),ny=((e.clientY-rect.top)/rect.height-.5);
      orbitState.tx=nx*2.5;orbitState.ty=ny*.9;
    },{passive:true});
    heroArt.addEventListener('pointerleave',()=>{orbitState.tx=0;orbitState.ty=0;},{passive:true});
    orbitSwitch.addEventListener('click',()=>{
      orbitState.immersive=!orbitState.immersive;
      heroArt.classList.toggle('orbit-mode',orbitState.immersive);
      orbitSwitch.setAttribute('aria-pressed',String(orbitState.immersive));
      orbitSwitch.innerHTML='<span class="orbit-led"></span>'+(orbitState.immersive?' EXIT 3D MODE ↗':' ENTER 3D MODE ↗');
      if(reducedMotion.matches)drawOrbit();
    });
    // Short cinematic entry curtain; no interaction is blocked past the intro.
    const loader=document.getElementById('filmLoader');
    if(reducedMotion.matches) loader.remove();
    else window.setTimeout(()=>{loader?.classList.add('passed');window.setTimeout(()=>loader?.remove(),750)},850);
    // Reading progress and cinematic reveal movement.
    const progress=document.getElementById('scrollProgress');
    let scrollQueued=false;
    function updateScroll(){
      const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
      progress.style.width=(100*scrollY/max).toFixed(2)+'%';
      scrollQueued=false;
    }
    window.addEventListener('scroll',()=>{if(!scrollQueued){requestAnimationFrame(updateScroll);scrollQueued=true}},{passive:true});updateScroll();
    // Inspectable, user-gesture 3D tilt. Keyboard navigation has no forced tilt.
    track.addEventListener('pointermove',e=>{
      if(!finePointer.matches)return;
      const card=e.target.closest('.film-card');
      track.querySelectorAll('.film-card').forEach(c=>{
        if(c!==card){c.style.setProperty('--tx','0deg');c.style.setProperty('--ty','0deg')}
      });
      if(!card)return;
      const b=card.getBoundingClientRect();
      const px=(e.clientX-b.left)/b.width-.5,py=(e.clientY-b.top)/b.height-.5;
      card.style.setProperty('--tx',(px*7).toFixed(1)+'deg');
      card.style.setProperty('--ty',(-py*7).toFixed(1)+'deg');
    },{passive:true});
    track.addEventListener('pointerleave',()=>{track.querySelectorAll('.film-card').forEach(c=>{c.style.setProperty('--tx','0deg');c.style.setProperty('--ty','0deg')})});
    const cursor=document.getElementById('customCursor');
    if(finePointer.matches&&!reducedMotion.matches){
      let tx=0,ty=0,cx=0,cy=0;let interacted=false;
      window.addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;if(!interacted){interacted=true;cursor.classList.add('visible')}},{passive:true});
      const cursorTick=()=>{cx+=(tx-cx)*.19;cy+=(ty-cy)*.19;cursor.style.left=cx+'px';cursor.style.top=cy+'px';requestAnimationFrame(cursorTick)};cursorTick();
      document.addEventListener('pointerover',e=>{cursor.classList.toggle('is-hover',Boolean(e.target.closest('.film-card,.index-row,.btn-accent,.view-btn,.orbit-switch,.arrow-btn,.spotactions a')))});
      document.addEventListener('pointerout',e=>{if(!e.relatedTarget)cursor.classList.remove('visible')});
    }
    // Custom cover parallax independent of the gallery motion.
    const spot=document.getElementById('spotvisual');
    spot.addEventListener('pointermove',e=>{
      if(!finePointer.matches||reducedMotion.matches)return;
      const r=spot.getBoundingClientRect();
      const dx=((e.clientX-r.left)/r.width-.5)*10,dy=((e.clientY-r.top)/r.height-.5)*8;
      spot.style.setProperty('--tilt-x',dx.toFixed(2)+'px');
      spot.style.setProperty('--tilt-y',dy.toFixed(2)+'px');
    },{passive:true});
    // Avoid trapping focus behind the modal and maintain normal Escape behavior.
    modal.addEventListener('click',e=>{if(e.target===modal)closeProject()});
    // Guard WatsStore live URL and source link rendering even if GitHub API can't be reached.


    // V5 — opening film reel. Autonomous only while visible and idle; the wheel,
    // horizontal dragging, touch, arrows, and focused keyboard are first-class controls.
    function initCinematicShowreel(){
      const opening=document.getElementById('cinemaOpening');
      const viewport=document.getElementById('cinemaViewport');
      const reel=document.getElementById('cinemaReel');
      const toggle=document.getElementById('cinemaPlay');
      if(!opening||!viewport||!reel||!toggle)return;
      const perf=`<div class="cinema-perf" aria-hidden="true">${Array.from({length:24},()=>'<i></i>').join('')}</div>`;
      reel.innerHTML=projects.map((p,i)=>`<button class="cinema-frame" type="button" data-open="${p.id}" aria-label="Project ${i+1} of ${projects.length}: ${p.title}. Open details" style="--cin-ry:0deg;--cin-y:0px;--cin-scale:1">${perf}<div class="cinema-frame-inner">${poster(p.slug)}<span class="cinema-frame-top"><span class="cinema-frame-tag">AS / ${String(i+1).padStart(2,'0')} — ${p.year}</span><span>EXP ${String(100+i*20)} / F2.8</span></span><span class="cinema-frame-bottom"><span><strong>${p.title}</strong><small>${p.category}</small></span><span class="cinema-film-arrow" aria-hidden="true">↗</span></span></div>${perf}</button>`).join('');
      const frames=[...reel.querySelectorAll('.cinema-frame')];
      const frameNo=document.getElementById('cinemaFrameNo');
      const frameName=document.getElementById('cinemaFrameName');
      const progressBar=document.getElementById('cinemaTimelineFill');
      const hint=document.getElementById('cinemaHint');
      const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
      let autoPlay=!reduce.matches,manualUntil=0,visible=true,dragging=false,dragMoved=false,ignoreClickUntil=0,dragX=0,dragLeft=0,pointerId=null,touchActive=false;
      let destination=viewport.scrollLeft,last=0,go=1,oldIndex=-1;
      let lastMotionUpdate=0;
      const maxScroll=()=>Math.max(0,viewport.scrollWidth-viewport.clientWidth);
      const clamp=v=>Math.max(0,Math.min(maxScroll(),v));
      function setPlaybackUI(){toggle.setAttribute('aria-pressed',String(autoPlay));toggle.setAttribute('aria-label',autoPlay?'Pause cinematic film autoplay':'Play cinematic film automatically');toggle.textContent=autoPlay?'Ⅱ PAUSE':'▶ PLAY';hint.textContent=autoPlay?'AUTO PLAYING · SCROLL TO DIRECT':'MANUAL REEL · SCROLL OR DRAG';}
      function manualInteraction(){manualUntil=performance.now()+6500;last=performance.now();}
      function refreshFocus(){
        const middle=viewport.getBoundingClientRect().left+viewport.clientWidth/2;
        let closest=0,dist=Infinity;
        const span=Math.max(300,frames[0]?.offsetWidth||600);
        frames.forEach((frame,i)=>{
          const r=frame.getBoundingClientRect();const dx=(r.left+r.width/2-middle)/span;
          const abs=Math.min(1.7,Math.abs(dx));
          if(Math.abs(dx)<dist){dist=Math.abs(dx);closest=i;}
          if(!reduce.matches){frame.style.setProperty('--cin-ry',(Math.max(-1.4,Math.min(1.4,-dx))*-6).toFixed(2)+'deg');frame.style.setProperty('--cin-y',(Math.min(1,abs)*13).toFixed(1)+'px');frame.style.setProperty('--cin-scale',(1-Math.min(1,abs)*.072).toFixed(3));frame.style.setProperty('--cin-opacity',(1-Math.min(1,abs)*.18).toFixed(3));frame.style.setProperty('--cin-bright',(1-Math.min(1,abs)*.22).toFixed(3));frame.style.setProperty('--cin-parallax',(-dx*4).toFixed(2)+'px');}
        });
        if(closest!==oldIndex){oldIndex=closest;frameNo.innerHTML=`${String(closest+1).padStart(2,'0')} <i>/ ${String(projects.length).padStart(2,'0')}</i>`;frameName.textContent=`${projects[closest].title.toUpperCase()} / ${projects[closest].category}`;}
        progressBar.style.width=(maxScroll()?Math.max(0,Math.min(100,viewport.scrollLeft/maxScroll()*100)):0).toFixed(2)+'%';
      }
      function animationStep(now){
        const dt=Math.min(50,now-(last||now));last=now;
        if(autoPlay&&visible&&!dragging&&!document.hidden&&now>manualUntil&&maxScroll()>0){
          if(destination>=maxScroll()-1)go=-1;
          else if(destination<=1)go=1;
          destination=clamp(destination+go*dt*.13);
        }
        if(visible&&!dragging&&!document.hidden){
          const diff=destination-viewport.scrollLeft;
          if(Math.abs(diff)>.25){viewport.scrollLeft+=diff*(reduce.matches?1:Math.min(.26,.085+dt*.003));}
          else if(Math.abs(diff)>.005){viewport.scrollLeft=destination;}
        }
        if(visible&&now-lastMotionUpdate>28){refreshFocus();lastMotionUpdate=now;}
        requestAnimationFrame(animationStep);
      }
      // Wheel is captured only when the reel can advance in that direction.
      // At either end, normal page scrolling is deliberately allowed.
      opening.addEventListener('wheel',e=>{
        if(e.ctrlKey||e.metaKey||modal.classList.contains('open'))return;
        const delta=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX;
        if(Math.abs(delta)<.1)return;
        const maximum=maxScroll();
        if((delta>0&&destination>=maximum-1)||(delta<0&&destination<=1))return;
        e.preventDefault();manualInteraction();
        destination=clamp(destination+delta*(e.deltaMode===1?18:e.deltaMode===2?viewport.clientWidth:1)*1.15);
      },{passive:false});
      viewport.addEventListener('pointerdown',e=>{
        if(e.pointerType==='mouse'&&e.button!==0)return;
        dragging=e.pointerType==='mouse'||e.pointerType==='pen';pointerId=e.pointerId;dragMoved=false;dragX=e.clientX;dragLeft=viewport.scrollLeft;manualInteraction();
        if(dragging){viewport.classList.add('is-dragging');}
      });
      viewport.addEventListener('pointermove',e=>{
        if(!dragging||pointerId!==e.pointerId)return;
        const dx=e.clientX-dragX;if(Math.abs(dx)>6)dragMoved=true;
        if(dragMoved){if(!viewport.hasPointerCapture?.(e.pointerId))viewport.setPointerCapture?.(e.pointerId);viewport.scrollLeft=clamp(dragLeft-dx*1.16);destination=viewport.scrollLeft;}
      });
      const endDrag=e=>{if(pointerId!==e.pointerId)return;if(dragMoved)ignoreClickUntil=performance.now()+230;dragging=false;dragMoved=false;pointerId=null;viewport.classList.remove('is-dragging');if(viewport.hasPointerCapture?.(e.pointerId))viewport.releasePointerCapture(e.pointerId);};
      viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);
      viewport.addEventListener('click',e=>{if(performance.now()<ignoreClickUntil){e.preventDefault();e.stopPropagation();}},{capture:true});
      viewport.addEventListener('scroll',()=>{if(touchActive)destination=viewport.scrollLeft;refreshFocus();},{passive:true});
      viewport.addEventListener('touchstart',()=>{touchActive=true;manualInteraction()},{passive:true});
      viewport.addEventListener('touchend',()=>{manualInteraction();setTimeout(()=>{touchActive=false;destination=viewport.scrollLeft},210)},{passive:true});
      viewport.addEventListener('keydown',e=>{
        let next=null;
        if(e.key==='ArrowRight')next=viewport.scrollLeft+Math.max(200,frames[0]?.offsetWidth||400);
        if(e.key==='ArrowLeft')next=viewport.scrollLeft-Math.max(200,frames[0]?.offsetWidth||400);
        if(e.key==='Home')next=0;
        if(e.key==='End')next=maxScroll();
        if(next!==null){e.preventDefault();manualInteraction();destination=clamp(next);}
      });
      toggle.addEventListener('click',()=>{autoPlay=!autoPlay;manualUntil=autoPlay?performance.now()+600:Infinity;setPlaybackUI();});
      const io=('IntersectionObserver' in window)?new IntersectionObserver(e=>{visible=e[0].isIntersecting;if(visible)destination=clamp(viewport.scrollLeft);},{threshold:.04}):null;
      io?.observe(opening);
      window.addEventListener('resize',()=>{destination=clamp(destination);refreshFocus();},{passive:true});
      // Reduced motion never autoplays. Updates are only a direct response to a gesture.
      reduce.addEventListener?.('change',()=>{if(reduce.matches){autoPlay=false;manualUntil=Infinity;}setPlaybackUI();refreshFocus()});
      setPlaybackUI();refreshFocus();requestAnimationFrame(animationStep);
    }

    renderProjects();
    initCinematicShowreel();
  
}