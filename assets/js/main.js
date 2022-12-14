

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name + " " + profileData.job;
 
    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tels:${profileData.phone}`;
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto: ${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById(`profile.skills.softSkills`);
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join(''); //transfou o JSON list a skill depois transformou em string
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById(`profile.skills.hardSkills`);
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<ul><li><img src="${skill.logo}" alt="${skill.name}" name=${skill.name} /></li></ul>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        debugger
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
})();