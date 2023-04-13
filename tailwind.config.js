/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        "bluesh":"#0a66c2",
        "whitesmoke":"whitesmoke"
      },
      backgroundColor : {
        "bg-primery": "#f3f2ef"
      },
      height:{ 
        "15":"60px"
      },
      borderRadius:{
        "xsl":"10px",
        "xxl":"22px",
        "4xl":"30px",


      },
      margin:{
        "s4":"18px"
      },
      fontSize:{
          "nm":"15px"
      }
    
    },
  },
  plugins: [],
}

