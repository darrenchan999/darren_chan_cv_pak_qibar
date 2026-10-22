const facts = [
  "Some dinosaurs may have had feathers.",
  "The smallest dinosaurs were about the size of chickens.",
  "Not all dinosaurs were gigantic—many were small and nimble.",
  "Some dinosaurs had bony crests or frills used for display.",
  "Birds are considered modern descendants of theropod dinosaurs."
];

document.addEventListener('DOMContentLoaded', ()=>{
  const factBtn = document.getElementById('factBtn');
  const factText = document.getElementById('factText');
  const showGallery = document.getElementById('showGallery');
  const gallery = document.getElementById('gallery');
  const themeToggle = document.getElementById('themeToggle');
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');

  factBtn.addEventListener('click', ()=>{
    const f = facts[Math.floor(Math.random()*facts.length)];
    factText.textContent = f;
  });

  showGallery.addEventListener('click', ()=>{
    gallery.classList.toggle('hidden');
  });

  themeToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
  });

  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    contactStatus.textContent = `Thanks, ${name || 'friend'}! Your message was sent (locally).`;
    contactForm.reset();
    setTimeout(()=>contactStatus.textContent='',4000);
  });
});
