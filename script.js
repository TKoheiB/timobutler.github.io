function showMainPage() {
    document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.sidebar ul li a').forEach(el => el.classList.remove('active'));
    document.querySelector('.sidebar ul li a').classList.add('active');
    document.getElementById('main-content').style.display = 'block';
}

function showProject(projectId) {
    document.getElementById('main-content').style.display = 'none';
    document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
    document.getElementById(projectId).style.display = 'block';
    document.querySelectorAll('.sidebar ul li a').forEach(el => el.classList.remove('active'));
    document.querySelector(`.sidebar ul li a[onclick="showProject('${projectId}')"]`).classList.add('active');
}

function closeProject() {
    document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.sidebar ul li a').forEach(el => el.classList.remove('active'));
    document.querySelector('.sidebar ul li a').classList.add('active');
    document.getElementById('main-content').style.display = 'block';
}
