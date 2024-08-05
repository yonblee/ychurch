const theme = async(from) => {
    await ui("theme", from);
  };
  
const mode = () => {
    let newMode = ui("mode") == "dark" ? "light" : "dark";
    ui("mode", newMode);
  }

  // button.circle(onclick="theme('https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg')")
  
  // button.circle(onclick="mode()")