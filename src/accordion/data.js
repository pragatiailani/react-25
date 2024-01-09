const data = [
  {
    id: 1,
    title: "What is React?",
    info: "React is a front end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI. Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.",
  },
  {
    id: 2,
    title: "What are the major features of React?",
    info: "The major features of React are: It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding.",
  },
  {
    id: 3,
    title: "What is JSX?",
    info: "JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.",
  },
  {
    id: 4,
    title: "What is the difference between Element and Component?",
    info: "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.",
  },
  {
    id: 5,
    title:
      "What are the differences between a class component and functional component?",
    info: "The major difference between these two is that functional components are stateless while class components can hold state and lifecycle hooks like componentDidMount.",
  },
];

export default data;
