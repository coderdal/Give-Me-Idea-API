const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const port = 3001;

const data = [
  /* CSS */
  {
    category: "css",
    data: [
      {
        id: uuidv4(),
        title: "Login Page",
        image:
          "https://media.istockphoto.com/vectors/user-login-page-on-background-vector-id479061526?k=20&m=479061526&s=170667a&w=0&h=cqGHCuDcEAa5e3TzMM5Ixo4Gqi3nEyN6zPWjqUQ1hRE=",
        description:
          "Create a login page design using your existing CSS knowledge.",
        task: "Create inputs where the user can enter username or e-mail, password. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge:
          "Try adding a hide-show password button to the password input!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda",
          "https://www.youtube.com/watch?v=HV7DtH3J2PU",
          "https://www.c-sharpcorner.com/article/creating-a-simple-login-page-using-html-and-css/",
        ],
      },
      {
        id: uuidv4(),
        title: "Survey Form",
        image:
          "https://media.istockphoto.com/vectors/online-survey-internet-surveying-hands-holding-tablet-with-test-form-vector-id1083334454?b=1&k=20&m=1083334454&s=612x612&w=0&h=DtSCahqV3tARWVE-a_ALJlFAAS5-mCQitb_Y66yBcFg=",
        description:
          "Create a online Survey Form design using your existing CSS knowledge.",
        task: "Create a survey form. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using tailwind!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.geeksforgeeks.org/build-a-survey-form-using-html-and-css/",
          "https://www.youtube.com/watch?v=aPnEAVo3z-I",
          "https://codepen.io/freeCodeCamp/pen/VPaoNP",
        ],
      },
      {
        id: uuidv4(),
        title: "Hamburger Menu",
        image: "https://miro.medium.com/max/1015/1*vv0v5E9Zdsn7OZtcTDv8SQ.png",
        description:
          "Create a Hamburger Menu design using your existing CSS knowledge.",
        task: "Create a Hamburger Menu responsive design. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using tailwind!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://codepen.io/erikterwan/pen/EVzeRP",
          "https://www.youtube.com/watch?v=DZg6UfS5zYg",
        ],
      },
      {
        id: uuidv4(),
        title: "Tribute Page",
        image:
          "https://shots.codepen.io/emekdev/pen/NWNvLpj-800.jpg?version=1607522762",
        description: "Create a Tribute Page using your existing CSS knowledge.",
        task: "Create a Tribute Page. Create a design in memory of a person. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using bootstrap!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.geeksforgeeks.org/design-a-tribute-page-using-html-css/",
          "https://www.youtube.com/watch?v=EoZ5qTsQcuk",
        ],
      },
      {
        id: uuidv4(),
        title: "Image Slider",
        image:
          "https://images01.nicepage.com/page/96/16/css-template-preview-96163.jpg",
        description: "Create a Image Slider using your existing CSS knowledge.",
        task: "Create a Image Slider that you can use it like picture presentation. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using html semantic tags!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.youtube.com/watch?v=pMltE4J4UQM",
          "https://www.w3docs.com/snippets/css/how-to-create-an-image-slider-or-slideshow.html",
        ],
      },
      {
        id: uuidv4(),
        title: "Technical Documentation Page",
        image:
          "https://whatfix.com/blog/wp-content/uploads/2021/09/screenbud-93ee901f-0191-40ad-bdae-6aaf678f7e7e.png",
        description:
          "Create a Technical Documentation Page using your existing CSS knowledge.",
        task: "Create a Technical Documentation that people can use to get detailed information about anything. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app without any code snippets!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.youtube.com/watch?v=hdMEqwkMTgs",
          "https://codepen.io/freeCodeCamp/pen/NdrKKL",
          "https://www.geeksforgeeks.org/design-a-webpage-like-technical-documentation-using-html-css/",
        ],
      },
      {
        id: uuidv4(),
        title: "Portfolio Page",
        image: "https://i.ytimg.com/vi/E6gHF6un0XU/maxresdefault.jpg",
        description:
          "Create a Portfolio Page using your existing CSS knowledge.",
        task: "Create a Portfolio Page that people can use it to see your projects and your resume. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using html semantic tags!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.freecodecamp.org/news/how-to-create-a-portfolio-website-using-html-css-javascript-and-bootstrap/",
          "https://www.youtube.com/watch?v=C8BlRjB3vYI",
        ],
      },
      {
        id: uuidv4(),
        title: "Landing Page",
        image:
          "https://static.wixstatic.com/media/c36ab8_85b9bfbc0a5848e7b835dece3347ad48~mv2.jpg/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/c36ab8_85b9bfbc0a5848e7b835dece3347ad48~mv2.jpg",
        description: "Create a Landing Page using your existing CSS knowledge.",
        task: "Create a Landing Page that people can use it to see any-example brand or product promotion. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using Tailwind !",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: ["https://www.youtube.com/watch?v=hVdTQWASliE"],
      },
      {
        id: uuidv4(),
        title: "Admin Dashboard Page",
        image:
          "https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0X2192S.png?v=2.1.1",
        description:
          "Create a Admin Dashboard Page using your existing CSS knowledge.",
        task: "Create a Admin Dashboard Page to control any website. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try using real statistics in your app!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.youtube.com/watch?v=nUUsUAPEjFc",
          "https://www.codinglabweb.com/2021/05/admin-dashboard-in-html-css.html",
        ],
      },
      {
        id: uuidv4(),
        title: "E-Commerce",
        image:
          "https://user-images.githubusercontent.com/51481476/97995142-25599200-1e0c-11eb-9061-484b73b1fcc1.png",
        description:
          "Create a E-Commerce Page using your existing CSS knowledge.",
        task: "Create a E-Commerce Page that people can use it to see your brand products. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using html semantic tags!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.youtube.com/watch?v=yQimoqo0-7g",
          "https://amashashalindi.medium.com/creating-a-small-e-commerce-website-using-html-and-css-df799808d12",
        ],
      },
      {
        id: uuidv4(),
        title: "Google UI Clone",
        image: "https://miro.medium.com/max/1400/1*6In6SKKPdSDlGD_HaIt5_w.png",
        description:
          "Create a Google UI Clone Page using your existing CSS knowledge.",
        task: "Create an identical Google UI Clone. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using Bootstrap!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://dev.to/somanathgoudar/build-google-clone-using-html-css-50go",
          "https://www.youtube.com/watch?v=zhH9uvTOyQM",
        ],
      },
      {
        id: uuidv4(),
        title: "Youtube UI Clone",
        image:
          "https://assets.materialup.com/uploads/0b5d4225-78d5-4c4e-9847-caa8ed6e6f9d/preview.jpg",
        description:
          "Create a Youtube UI Clone Page using your existing CSS knowledge.",
        task: "Create an identical Youtube UI Clone. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using Tailwind!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://www.freecodecamp.org/news/how-to-build-a-website-with-html-and-css-step-by-step/",
          "https://www.youtube.com/watch?v=rhPSo4_Tgi0",
        ],
      },
      {
        id: uuidv4(),
        title: "Twitter UI Clone",
        image:
          "https://lh3.googleusercontent.com/EwksbkLRH7knAX5O7y7Zs9sZLwWpJeuS1nzRYQxZ7_9QuuLW7Q-46A9LqUC6MVy9OlmkZ2P5n2W1yS877sBw95M2=w640-h400-e365-rj-sc0x00ffffff",
        description:
          "Create a Twitter UI Clone Page using your existing CSS knowledge.",
        task: "Create an identical Twitter UI Clone. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using Tailwind!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://dev.to/somanathgoudar/build-twitter-clone-using-html-and-css-tutorial-aop",
          "https://www.youtube.com/watch?v=TSsPAOmTFsM",
        ],
      },
      {
        id: uuidv4(),
        title: "LinkedIn UI Clone",
        image:
          "https://cdn.dribbble.com/users/881719/screenshots/8001937/1_4x.png",
        description:
          "Create a LinkedIn UI Clone Page using your existing CSS knowledge.",
        task: "Create an identical LinkedIn UI Clone. Style your app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try writing your app using Bootstrap!",
        note: "You can use SASS, Bootstrap, Tailwind etc libraries!",
        related: [
          "https://dev.to/somanathgoudar/build-a-linkedin-clone-using-just-html-css-3p1n",
          "https://www.youtube.com/watch?v=RnN6r0fTbvQ",
        ],
      },
    ],
  },
  /* JS */
  {
    category: "js",
    data: [
      {
        id: uuidv4(),
        title: "Counter App",
        image: "https://allma.si/blog/wp-content/uploads/2021/09/counter.gif",
        description: "Create a Counter app using your JavaScript knowledge.",
        task: "Create a Counter App. Be able to increment and decrement a number. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Animate the number on change!",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.geeksforgeeks.org/how-to-make-incremental-and-decremental-counter-using-html-css-and-javascript/",
          "https://www.youtube.com/watch?v=yU0Eg7T3ulw",
        ],
      },
      {
        id: uuidv4(),
        title: "To-Do List",
        image:
          "https://img.freepik.com/free-vector/doodle-list-icon-logo-hand-drawn-with-thin-black-line-isolated-white-background-vector-illustration_92242-931.jpg",
        description: "Create a To-Do List app using your JavaScript knowledge.",
        task: "Create a To Do App where you can add some to-dos and set or delete completed ones. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try adding a to-do update feature to your app!",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_js_todolist.asp",
          "https://www.youtube.com/watch?v=ykuD2QOZkhc",
        ],
      },
      {
        id: uuidv4(),
        title: "Calculator App",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/calculator-design.png",
        description: "Create a Calculator app using your JavaScript knowledge.",
        task: "Create a Calculator App. Be able to add, subtract, divide, and multiply numbers together & use decimals & clear the result. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Be able to use the modulus! & Try to not use eval()",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/",
          "https://www.youtube.com/watch?v=yIdA6HvUi_Q",
        ],
      },
      {
        id: uuidv4(),
        title: "Contact Form App",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/contact-form-design.png",
        description:
          "Create a Contact Form App app using your JavaScript knowledge.",
        task: "Create a Contact Form App. Be able to fill out the contact form, validate that fields are valid. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge:
          "Be able to send an email with the details using an API call",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://stackhowto.com/contact-form-with-html-css-and-javascript/",
          "https://www.youtube.com/watch?v=rpujWVkmiPE",
        ],
      },
      {
        id: uuidv4(),
        title: "Landing Page",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/landing-page-design.png",
        description:
          "Create a Landing Page app using your JavaScript knowledge.",
        task: "Create a Landing Page Application. Be able to smoothly scroll to other sections of the page with anchors & resize the page without breaking the layout. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Semantic HTML, Responsive CSS",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.freecodecamp.org/news/how-to-make-a-landing-page-with-html-css-and-javascript/",
          "https://www.youtube.com/watch?v=s_z5laE4KTw",
        ],
      },
      {
        id: uuidv4(),
        title: "Toggleable Sidebar",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/sidebar-design.png",
        description:
          "Create a Toggleable Sidebar app using your JavaScript knowledge.",
        task: "Create a Toggleable Sidebar Application. Be able to toggle the sidebar on and off & generate the menu items from a JavaScript object. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge:
          "Be able to navigate to different pages by interacting with the items",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp",
          "https://www.youtube.com/watch?v=mFf56HOxOC0",
        ],
      },
      {
        id: uuidv4(),
        title: "Hamburger Menu",
        image:
          "https://www.tremplin-numerique.org/wp-content/uploads/2021/04/Quest-ce-quun-bouton-de-menu-Hamburger.png",
        description:
          "Create a Hamburger Menu app using your JavaScript knowledge.",
        task: "Create a Hamburger Menu Application. Be able to toggle the state of a hamburger menu on and off. The hamburger menu should be automatically closed when a menu item is interacted with. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Use animations.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_js_mobile_navbar.asp",
          "https://www.youtube.com/watch?v=flItyHiDm7E",
        ],
      },
      {
        id: uuidv4(),
        title: "Image Slider",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/image-slider-design-1.png",
        description:
          "Create a Image Slider app using your JavaScript knowledge.",
        task: "Create a Image Slider Application. Be able to navigate between images using dots or arrows & swipe the images on mobile & infinitely swipe to both sides. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Be able to choose between animations.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_js_slideshow.asp",
          "https://www.youtube.com/watch?v=KcdBOoK3Pfw",
        ],
      },
      {
        id: uuidv4(),
        title: "FAQ Section",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/faq-component-design.png",
        description:
          "Create a FAQ Section app using your JavaScript knowledge.",
        task: "Create a FAQ Section Application. Be able to toggle FAQs on and off. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge:
          "Be able to automatically close opened sections if another section is toggled on.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://sweetcode.io/how-to-build-an-faq-page-with-html-and-javascript/",
          "https://www.youtube.com/watch?v=MXrtXg1kpVs",
        ],
      },
      {
        id: uuidv4(),
        title: "Calendar",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/calendar-design.png",
        description: "Create a Calendar app using your JavaScript knowledge.",
        task: "Create a Calendar Application. Be able to navigate between months & see today highlighted. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Be able to recall time entries from local storage.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.codewithrandom.com/2021/10/make-calendar-using-html-css-javascript.html",
          "https://www.youtube.com/watch?v=o1yMqPyYeAo",
        ],
      },
      {
        id: uuidv4(),
        title: "Timeline Component",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/timeline-component-design.png",
        description:
          "Create a Timeline Component app using your JavaScript knowledge.",
        task: "Create a Timeline Component Application. Be able to generate a timeline from an array of objects & set the color of a timeline item. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Use animations.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_css_timeline.asp",
          "https://www.youtube.com/watch?v=zNccqv0g6Q4",
        ],
      },
      {
        id: uuidv4(),
        title: "Event Countdown Component",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/event-countdown-design-1024x768.png",
        description:
          "Create a Event Countdown Component app using your JavaScript knowledge.",
        task: "Create a Event Countdown Component Application. Be able to call a function with the number of days that will display a countdown & same function with the number of hours-minutes. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Use animations.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_js_countdown.asp",
          "https://www.youtube.com/watch?v=KOZGCbSwGBc",
        ],
      },
      {
        id: uuidv4(),
        title: "Star-rating Component",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/star-rating-component-design.png",
        description:
          "Create a Star-rating Component app using your JavaScript knowledge.",
        task: "Create a Star-rating Component Application. Be able to interact with the star rating component. When a star is clicked, it should retain state even after page reload. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Be able to set a custom icon for the component.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.w3schools.com/howto/howto_css_star_rating.asp",
          "https://www.youtube.com/watch?v=rw3eZ6XodN8",
        ],
      },
      {
        id: uuidv4(),
        title: "Stepper Component",
        image:
          "https://allma.si/blog/wp-content/uploads/2021/09/stepper-component-design.png",
        description:
          "Create a Stepper Component app using your JavaScript knowledge.",
        task: "Create a Stepper Component Application. Be able to define a list of steps with a name & set a complete state of a step. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Be able to set a custom icon for the component.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://ishadeed.com/article/stepper-component-html-css/",
          "https://www.youtube.com/watch?v=WW6fEuheuas",
        ],
      },
    ],
  },
  /* React */
  {
    category: "react",
    data: [
      {
        id: uuidv4(),
        title: "Counter App",
        image: "https://allma.si/blog/wp-content/uploads/2021/09/counter.gif",
        description: "Create a Counter app using your React JS knowledge.",
        task: "Create a Counter App. Be able to increment and decrement a number. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Animate the number on change!",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.geeksforgeeks.org/how-to-create-a-simple-counter-using-reactjs/",
          "https://www.youtube.com/watch?v=65kX31klmtI",
        ],
      },
      {
        id: uuidv4(),
        title: "Rock, Paper, Scissors Game",
        image: "https://miro.medium.com/max/800/1*8du96SQUQ0NlWmWvVu20Zw.png",
        description:
          "Create a Rock, Paper, Scissors Game app using your React JS knowledge.",
        task: "Create a Rock, Paper, Scissors Game App. Be able to draw either rock, paper, or scissors against the computer & see the scores of each party & see the outcome of previous turns. Make your app functional app and publish it ! Send it to us and we'll share you here.",
        challenge: "Try to add choose level difficulty.",
        note: "Note: You can use SASS, Bootstrap, Tailwind etc. libraries to stylize your app.",
        related: [
          "https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/",
          "https://www.youtube.com/watch?v=1yS-JV4fWqY",
        ],
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.json({
    title: "This app created by @coderdal for https://givemeidea.netlify.app",
  });
});

app.get("/idea/:id", (req, res) => {
  const resp = data.map((category) =>
    category.data.filter((item) => item.id == req.params.id)
  );
  res.json(
    resp.find((e) => {
      return e != "";
    })
  );
});

/* Endpoints */

app.get("/css", (req, res) => {
  res.json(data.filter((item) => item.category === "css"));
});

app.get("/js", (req, res) => {
  res.json(data.filter((item) => item.category === "js"));
});

app.get("/react", (req, res) => {
  res.json(data.filter((item) => item.category === "react"));
});

app.get("/vue", (req, res) => {
  res.json(data.filter((item) => item.category === "vue"));
});

app.get("/angular", (req, res) => {
  res.json(data.filter((item) => item.category === "angular"));
});

app.get("/svelte", (req, res) => {
  res.json(data.filter((item) => item.category === "svelte"));
});

/* App */

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
