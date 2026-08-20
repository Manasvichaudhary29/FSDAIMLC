// const root=document.getElementById('root')
// const button=document.getElementById('btn')
const showResume = document.getElementById('showResume');
const resumeDetails = document.getElementById('resumeDetails');
const button=document.getElementById('btn')

button.addEventListener('click', resume) 
function resume () {

    resumeDetails.innerHTML = `
        <h1>My Resume</h1>

        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Manasvi Chaudhary</p>
        <p><strong>Email:</strong> manasvibaliyan001@gmail.com</p>
        <p><strong>Phone:</strong> 9625224164</p>
        <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>

        <h2>Education</h2>
        <p>B.Tech in Computer Science (AIML)</p>

        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>C++</li>
        </ul>
        <h2>projects</h2>
        <ul>
            <li>digital farm</li>
            <li>web application</li>
            <li>sharehub</li>
        </ul>
        <h2>About Me</h2>
        <p>I am interested in web development and programming and a hard working student and willing to learn something new</p>
    `;
};



// button.addEventListener('click',resume);