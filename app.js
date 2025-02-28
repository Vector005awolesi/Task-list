// Initialize variables
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDeadline = document.getElementById("taskDeadline");
const taskList = document.getElementById("taskList");
const historyList = document.getElementById("historyList");
const notification = document.getElementById("notification");
const quoteElement = document.getElementById("quoteElement");
const timeGreeting = document.getElementById("timeGreeting");
const sidebar = document.getElementById("sidebar");
const sidebarToggler = document.getElementById("sidebarToggler");
const sidebarCanceler = document.getElementById("sidebar-cancle");
const darkMode = document.getElementById("themebtndark");
const lightMode = document.getElementById("themebtnlight");

setTimeout(()=>{
      document.getElementById("app").style.display = "block";
    document.getElementById("loader").style.display = "none"
     },3000) 

// Toggle dark mode
// darkMode.addEventListener("click", () => {
//   darkMode.style.display = "none";
//   lightMode.style.display = "inline";
//   document.getElementById("body").style.backgroundColor = "#21252bc0";
//   document.getElementById("container").style.backgroundColor = "#282C34";
//  document.getElementById("headerMain").style.color = "#D7DAE0";
// //   document.querySelector("h2").style.color = "#D7DAE0";
// //   document.querySelector("h3").style.color = "#D7DAE0";
// //   document.querySelector("h4").style.color = "#D7DAE0";
// //   document.querySelector("h5").style.color = "#D7DAE0";
// //   document.querySelector("h6").style.color = "#D7DAE0";
// //   document.querySelector("p").style.color = "#D7DAE0";


  
// });
// // Toggle light mode
// lightMode.addEventListener("click", () => {
//   darkMode.style.display = "inline";
//   lightMode.style.display = "none";
// });


// Sidebar Toggler
sidebarToggler.addEventListener("click", () => {
  sidebar.style.width = "390px";
  sidebar.style.padding = "20px";
});
sidebarCanceler.addEventListener("click", () => {
  sidebar.style.width = 0;
  sidebar.style.padding = 0;
});
// Fetch random quote

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  { text: "Your limitation—it’s only your imagination.", author: "Anonymous" },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Anonymous",
  },
  { text: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Dream it. Wish it. Do it.", author: "Anonymous" },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    author: "Anonymous",
  },
  {
    text: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Anonymous",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    text: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "Believe in yourself and you will be unstoppable.",
    author: "Anonymous",
  },
  {
    text: "A little progress each day adds up to big results.",
    author: "Anonymous",
  },
  {
    text: "Difficult roads often lead to beautiful destinations.",
    author: "Anonymous",
  },
  { text: "You only fail when you stop trying.", author: "Albert Einstein" },
  {
    text: "To see what is right and not do it is a lack of courage.",
    author: "Confucius",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "If you want to achieve greatness, stop asking for permission.",
    author: "Anonymous",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  { text: "Your limitation—it’s only your imagination.", author: "Anonymous" },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Anonymous",
  },
  { text: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Dream it. Wish it. Do it.", author: "Anonymous" },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    author: "Anonymous",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Anonymous",
  },
  { text: "Dream bigger. Do bigger.", author: "Anonymous" },
  {
    text: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Anonymous",
  },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Anonymous",
  },
  {
    text: "It’s going to be hard, but hard does not mean impossible.",
    author: "Anonymous",
  },
  { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Anonymous",
  },
  { text: "Dreams don’t work unless you do.", author: "John C. Maxwell" },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "Opportunities don't knock, they whisper. So shut up and listen.",
    author: "Anonymous",
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    text: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  { text: "Stay positive, work hard, make it happen.", author: "Anonymous" },
  {
    text: "Some people dream of success, while others wake up and work hard at it.",
    author: "Napoleon Hill",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
];

function generateQuote() {
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quoteText").textContent = `${randomQuote.text}`;
    document.getElementById(
      "quoteAuthor"
    ).textContent = `- ${randomQuote.author}`;
  }, 500); // Matches the CSS transition time
}

// // Change quote every 30 seconds
// setInterval(generateQuote, 30000);

// Generate a new quote on page load
window.onload = generateQuote;

function updateQuoteWithAnimation() {
  // Fade out the quote
  quoteElement.classList.remove("visible");

  // Wait for the fade-out animation to complete, then fetch a new quote and fade it in
  setTimeout(async () => {
    await generateQuote();
    quoteElement.classList.add("visible");
  }, 2000); // Wait for 2 seconds (duration of the fade-out animation)
}

// Fetch a quote immediately when the page loads

quoteElement.classList.add("visible");

// Fetch a new quote every 30 seconds
setInterval(updateQuoteWithAnimation, 30000);

// Update time and greeting
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = "";

  if (hours < 12) {
    greeting = "Good Morning ☀️";
  } else if (hours < 17) {
    greeting = "Good Afternoon 🌤️";
  } else if (hours === 17 || hours > 17) {
    greeting = "Good Evening 🌙";
  } else {
  }

  timeGreeting.innerHTML = `<h1 id="headerMain">${greeting}</h1><small>${now.toLocaleTimeString()}</small>`;
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create task element
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = `task-item ${task.completed ? "completed" : ""}`;
  li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${
                  task.completed ? "checked" : ""
                } onchange="toggleTask(${task.id})">
                <div class="task-text">${task.text}</div>
                <div class="deadline-indicator">${new Date(
                  task.deadline
                ).toLocaleString()}</div>
                ${
                  task.completed
                    ? `<div class="completed-time">Completed: ${new Date(
                        task.completedTime
                      ).toLocaleTimeString()}</div>`
                    : ""
                }
                <div class="task-actions">
                    <button class="btn btn-light" onclick="deleteTask(${
                      task.id
                    })"><i class="fas fa-trash"></i></button>
                </div>
            `;
  return li;
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  historyList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);

    const historyItem = document.createElement("li");
    historyItem.className = "history-item";
    historyItem.textContent = `${task.text} - ${
      task.completed ? "Completed" : "Pending"
    }`;
    historyList.appendChild(historyItem);
  });
}

// Add new task
function addTask(e) {
  e.preventDefault();
  if (!taskInput.value.trim()) return;

  const newTask = {
    id: Date.now(),
    text: taskInput.value,
    deadline: taskDeadline.value,
    completed: false,
    completedTime: null,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
  taskDeadline.value = "";
}

// Toggle task completion
function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
      task.completedTime = task.completed ? new Date() : null;
    }
    return task;
  });
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
  showNotification("Task deleted successfully!", "success");
}

// Clear completed tasks
function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
  showNotification("Completed tasks cleared!", "success");
}

// Show notification
function showNotification(message, type) {
  notification.textContent = message;
  notification.style.backgroundColor = `var(--${type})`;
  notification.style.display = "block";

    // Create an audio element
    const audio = new Audio('preview.mp3'); 
  
    // Play the sound
    audio.play().then(() => {
        console.log("Bell sound played!");
    }).catch(error => {
        console.error("Error playing bell sound:", error);
    });
  
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

// Check deadlines
function checkDeadlines() {
  tasks.forEach((task) => {
    if (!task.completed && new Date(task.deadline) < new Date()) {
      showNotification(`Deadline passed for: ${task.text}`, "warning");
    }
  });
}

// Initialize app
function init() {
  generateQuote();
  updateTime();
  setInterval(updateTime, 1000);
  setInterval(checkDeadlines, 5000);
  renderTasks();
}

// Event listeners
taskForm.addEventListener("submit", addTask);

// Start the app
init();
