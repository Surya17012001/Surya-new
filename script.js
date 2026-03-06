function loadPage(page){

    const content = document.getElementById("content");

    // Remove active class
    document.querySelectorAll(".nav-btn")
        .forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");


    if(page === "home"){
        content.innerHTML = `
            <h1>I am Surya</h1>
            <div class="card">
I am Surya, a motivated and growth-oriented professional from Thiruvannamalai, dedicated to building a strong career in technology and business. With a Bachelor’s degree in Electronics and Communication Science, I have developed analytical thinking and problem-solving abilities that support my technical journey. I specialize in web development and Java full stack development, continuously improving my skills to stay aligned with modern industry standards. My experience across marketing, medical billing, and corporate relationship management has strengthened my communication, leadership, and organizational skills. As the owner of Aperiofincraft Pvt Ltd and Passion Path Pvt Ltd, I have gained valuable entrepreneurial experience in company operations and marketing strategies. I am passionate about creating impactful digital solutions that enhance user experience and business efficiency. I adapt quickly to new environments and enjoy taking on challenges that push me toward excellence. My goal is to leverage technology to create innovative enterprises that deliver long-term value. I believe in continuous learning, professional integrity, and maintaining a strong work ethic. Driven by ambition and vision, I am committed to building successful ventures while making a meaningful contribution to the industry.

            </div>
        `;
    }

    else if(page === "about"){
        content.innerHTML = `
            <h1>About Me</h1>
            <div class="card">
            I am Surya, a forward-thinking professional who blends technical expertise with entrepreneurial vision. Born on 17 January 2001 in Thiruvannamalai, I have always been driven by ambition and a desire to create meaningful impact. I earned my Bachelor’s degree in Electronics and Communication Science, which strengthened my analytical and problem-solving abilities. My core expertise lies in web development and Java full stack development, enabling me to build efficient and scalable digital solutions. I continuously work on upgrading my skills to stay aligned with evolving technologies and industry trends. My professional journey across marketing, healthcare, and corporate services has enhanced my adaptability and communication skills. As the founder of Aperiofincraft Pvt Ltd and Passion Path Pvt Ltd, I have developed strong leadership and strategic decision-making capabilities. Managing these ventures has given me practical exposure to business operations and growth planning. I am passionate about leveraging technology to solve real-world challenges and drive innovation. With a clear vision for the future, my goal is to create successful technology-driven enterprises that deliver lasting value.

            </div>
        `;
    }

    else if(page === "skills"){
        content.innerHTML = `
            <h1>Skills</h1>

            <div class="card">✅ HTML / CSS / JavaScript</div>
            <div class="card">✅ React</div>
            <div class="card">✅ Java</div>
            <div class="card">✅ SQL</div>
            <div class="card">✅ Spring Boot</div>

        `;
    }

    else if(page === "projects"){
        content.innerHTML = `
            <h1>Projects</h1>

            <div class="card">
            🔥 Responsive Portfolio Website
            </div>

            <div class="card">
            🔥 Insurance Management System (Java)
            </div>

            <div class="card">
            🔥 E-Commerce Liquor Website
            </div>

            <div class="card">
            🔥 Salse and service company data (SQL)
            </div> 
        `;
    }

    else if(page === "contact"){
        content.innerHTML = `
            <h1>Contact</h1>

            <div class="card">
            📞 9361827517 <br><br>
            📧 suryarajendranm1701@gmail.com
            </div>
        `;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".nav-btn").click();
});
