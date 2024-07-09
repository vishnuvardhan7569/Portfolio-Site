document.addEventListener('DOMContentLoaded', function() {
  const descriptions = {
      html: "HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page and its content. HTML elements form the building blocks of web pages. It uses tags such as div tag, p tag, and a tag. HTML is essential for web development. It allows embedding images, videos, and other media. It also supports forms for user input. HTML5 introduced new features like canvas and video. Understanding HTML is crucial for web design. It is the foundation of web technologies.",
      css: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS controls the layout, colors, fonts, and overall visual style of a webpage. It enables responsive design for different devices. CSS3 introduced animations and transitions. CSS is crucial for creating visually appealing websites. It separates content from design, improving maintainability. CSS frameworks like Bootstrap simplify design. Mastering CSS is essential for front-end development. It enhances user experience through beautiful design. CSS works with HTML to create dynamic web pages.",
      javascript: "JavaScript is a programming language used to create dynamic and interactive effects on web pages. It enables complex web features like animations, form validation, and asynchronous content updates. JavaScript is essential for front-end development. It works with HTML and CSS. Modern JavaScript includes ES6+ features. JavaScript frameworks like React, Angular, and Vue are popular. Node.js allows JavaScript on the server-side. Mastering JavaScript is key for web development. It supports event-driven, functional, and imperative programming styles. JavaScript powers many web applications and websites.",
      php: "PHP (Hypertext Preprocessor) is a popular server-side scripting language for web development. It is embedded in HTML and interacts with databases like MySQL. PHP is widely used for dynamic web pages. It supports various databases and web services. PHP frameworks like Laravel streamline development. It is open-source and has a large community. PHP is essential for back-end development. It powers many content management systems (CMS) like WordPress. Mastering PHP enables creating robust web applications. PHP enhances server-side functionality and interacts seamlessly with front-end technologies.",
      mysql: "MySQL is a widely used open-source relational database management system (RDBMS). It is essential for storing, retrieving, and managing data in web applications. MySQL supports SQL (Structured Query Language). It is used in many web technologies like WordPress and Joomla. MySQL ensures data integrity and security. It supports various storage engines and replication. Mastering MySQL is crucial for back-end development. It integrates well with PHP and other server-side languages. MySQL enhances performance through indexing and optimization. It is scalable and suitable for large applications.",
      c: "C is a powerful general-purpose programming language. It is widely used for system programming, developing operating systems, and embedded systems. C provides low-level memory access. It is known for its efficiency and performance. C is the foundation for many modern languages like C++ and Java. Understanding C is crucial for software development. It supports structured programming and modularity. C is used in game development and real-time systems. Mastering C enhances problem-solving skills. It is essential for understanding computer architecture. C programming is fundamental for many technical fields.",
      cpp: "C++ is an extension of the C programming language. It introduces object-oriented programming (OOP) features. C++ is widely used for developing software, games, and real-time systems. It supports classes, inheritance, and polymorphism. C++ enhances code reusability and modularity. Understanding C++ is crucial for software engineering. It is used in system programming and performance-critical applications. C++ libraries like STL provide powerful tools. Mastering C++ enables efficient and scalable software development. It combines low-level control with high-level abstraction. C++ programming is fundamental for many technical careers.",
      communication: "Communication skills are essential for effectively conveying information and ideas. They include verbal, non-verbal, and written communication. Good communication enhances teamwork and collaboration. It is crucial for leadership and management roles. Effective communication involves active listening and empathy. It improves relationships and resolves conflicts. Communication skills are important in all professions. They aid in presenting ideas clearly and persuasively. Mastering communication skills enhances career prospects. It involves continuous learning and practice. Strong communication skills are key to professional success.",
      creativity: "Creativity involves generating innovative ideas and solutions. It is essential for problem-solving and adapting to new situations. Creativity enhances critical thinking and flexibility. It is crucial in fields like design, marketing, and technology. Creative thinking involves brainstorming and experimenting. It improves productivity and innovation. Creativity skills are important in all professions. They aid in developing unique products and services. Mastering creativity involves continuous learning and exploration. Strong creativity skills are key to professional growth. Creativity drives progress and competitive advantage.",
      teamwork: "Teamwork skills involve working effectively with others to achieve common goals. They include collaboration, communication, and conflict resolution. Good teamwork enhances productivity and morale. It is crucial for organizational success. Effective teamwork involves trust and mutual respect. It improves problem-solving and decision-making. Teamwork skills are important in all professions. They aid in achieving collective objectives. Mastering teamwork involves continuous learning and practice. Strong teamwork skills enhance career prospects. Teamwork drives organizational success and growth.",
      problemsolving: "Problem-solving skills involve identifying issues and developing solutions. They include analytical thinking, creativity, and decision-making. Good problem-solving enhances efficiency and productivity. It is crucial for leadership and management roles. Effective problem-solving involves gathering information and evaluating options. It improves innovation and adaptability. Problem-solving skills are important in all professions. They aid in overcoming challenges and achieving goals. Mastering problem-solving involves continuous learning and practice. Strong problem-solving skills enhance career prospects. Problem-solving drives organizational success and growth."
  };

  const skillImages = document.querySelectorAll('.skill img');
  const modal = document.getElementById('skillModal');
  const modalDescription = document.getElementById('modal-description');
  const span = document.getElementsByClassName('close')[0];

  skillImages.forEach(img => {
      img.addEventListener('click', function() {
          const skill = this.getAttribute('data-skill');
          modalDescription.innerHTML = descriptions[skill];
          document.body.classList.add('no-scroll');
          modal.style.display = 'block';
      });
  });

  span.onclick = function() {
      modal.style.display = 'none';
      document.body.classList.remove('no-scroll');
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
          document.body.classList.remove('no-scroll');
      }
  }
});


//form-validation

function validateForm() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all required fields.');
  }
  alert("Thank You For Filling the Form");
}