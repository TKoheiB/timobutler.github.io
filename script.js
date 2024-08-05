document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sidebar ul li a').forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();
            const projectId = el.getAttribute('data-project');
            if (projectId === 'main') {
                showMainPage();
            } else {
                showProject(projectId);
            }
            closeSidebar(); // Close the sidebar after a menu item is clicked
        });
    });

    document.querySelectorAll('.project').forEach(el => {
        el.addEventListener('click', () => {
            const projectId = el.getAttribute('data-project');
            showProject(projectId);
        });
    });

    document.querySelectorAll('.close-button').forEach(el => {
        el.addEventListener('click', closeProject);
    });

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleSidebar);
    }

    document.getElementById('header-link').addEventListener('click', event => {
        event.preventDefault();
        showMainPage();
    });

    document.getElementById('sidebar-header-link').addEventListener('click', event => {
        event.preventDefault();
        showMainPage();
    });
});

function showMainPage() {
    document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.sidebar ul li a').forEach(el => el.classList.remove('active'));
    document.querySelector('.sidebar ul li a[data-project="main"]').classList.add('active');
    document.getElementById('main-content').style.display = 'block';
}

function showProject(projectId) {
    document.getElementById('main-content').style.display = 'none';
    document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
    document.getElementById(projectId).style.display = 'block';
    document.querySelectorAll('.sidebar ul li a').forEach(el => el.classList.remove('active'));
    document.querySelector(`.sidebar ul li a[data-project="${projectId}"]`).classList.add('active');
}

function closeProject() {
    document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.sidebar ul li a').forEach(el => el.classList.remove('active'));
    document.querySelector('.sidebar ul li a[data-project="main"]').classList.add('active');
    document.getElementById('main-content').style.display = 'block';
}

function toggleSidebar() {
    console.log('toggleSidebar called');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('visible');
    console.log('Sidebar class list after toggle:', sidebar.classList);
}

function closeSidebar() {
    console.log('closeSidebar called');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('visible');
    console.log('Sidebar class list after close:', sidebar.classList);
}
