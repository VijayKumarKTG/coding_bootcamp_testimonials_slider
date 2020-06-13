let testimonialData = [
  {
    name: `Tanya Sinclair`,
    image: `./images/image-tanya.jpg`,
    job: `UX Engineer`,
    desc: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
  },
  {
    name: `John Tarkpor`,
    image: `./images/image-john.jpg`,
    job: `Junior Front-end Developer`,
    desc: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
  },
];
let index = 0;
const image = document.querySelector('#image');
const desc = document.querySelector('.template__desc');
const name = document.querySelector('#name');
const job = document.querySelector('#job');

const prev = document.querySelector('#prev');
prev.addEventListener('click', () => {
  if (index === 0) {
    index = testimonialData.length - 1;
  } else {
    --index;
  }
  changeContents();
});

const next = document.querySelector('#next');
next.addEventListener('click', () => {
  if (index === testimonialData.length - 1) {
    index = 0;
  } else {
    ++index;
  }
  changeContents();
});

const changeContents = () => {
  image.src = testimonialData[index].image;
  image.alt = `${testimonialData[index].name} ${testimonialData.job}`;
  desc.innerHTML = testimonialData[index].desc;
  name.innerHTML = testimonialData[index].name;
  job.innerHTML = testimonialData[index].job;
  setTimeout(() => {
    image.classList.add('animate');
    desc.classList.add('animate');
    name.classList.add('animate');
    job.classList.add('animate');
  }, 0);
  setTimeout(() => {
    image.classList.remove('animate');
    desc.classList.remove('animate');
    name.classList.remove('animate');
    job.classList.remove('animate');
  }, 1000);
};
