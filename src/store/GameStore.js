import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  levels: [
    {
      id: 1,
      name: "Search Words",
      status: "pending",
      icon: "fa-solid fa-magnifying-glass",
    }, 
    {
      id: 2,
      name: "Cypher",
      status: "pending",
      icon: "fa-solid fa-fingerprint",
    },
    { status: "pending", id: 3, name: "Quiz", icon: "fa-solid fa-question" },
    {
      id: 4,
      name: "Memory Game",
      status: "pending",
      icon: "fa-solid fa-memory",
    },
    {
      id: 5,
      name: "Puzzle Question",
      status: "pending",
      icon: "fa-solid fa-box-open",
    },
  ],
  quizQuestions: [
    {
      question: "Šta predstavlja skraćenica HTML?",
      options: [
        "HyperText Markup Linguistics",
        "HyperText Markup Language",
        "HighTech Modular Language",
        "HyperText Makeup Language",
      ],
      correctAnswer: 1,
    },
    {
      question: "Koji je osnovni jezik za programiranje veb-stranica?",
      options: ["JavaScript", "Python", "Ruby", "HTML5"],
      correctAnswer: 0,
    },
    {
      question: "Šta označava .CSS u web programiranju?",
      options: [
        "Computer Style Sheets",
        "Creative Style Syntax",
        "Colorful Styling System",
        "Cascading Style Sheets",
      ],
      correctAnswer: 3,
    },
    {
      question: "Koja je osnovna svrha HTTP u kontekstu internet komunikacije?",
      options: [
        "HyperText Transfer Protocol",
        "High-Level Transfer Process",
        "Human-Computer Text Protocol",
        "HyperTextual Transmission Process",
      ],
      correctAnswer: 0,
    },
    {
      question: "Koja je popularna baza podataka otvorenog koda?",
      options: ["Oracle Database", "SQLite", "MySQL", "MongoDB"],
      correctAnswer: 2,
    },
  ],
};
const gameSlice = createSlice({
  name: "isCompleted",
  initialState: initialState,
  reducers: {
    levelCompleted(state, action) {
      state.levels[action.payload - 1].status = "success";
    },
  },
});

const store = configureStore({
  reducer: gameSlice.reducer,
});

export default store;

export const gameActions = gameSlice.actions;
