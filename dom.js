document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-form');
    const studentDetailsDiv = document.getElementById('student-details');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentName = document.getElementById('student-name').value;
        const studentId = document.getElementById('student-id').value;
        const email = document.getElementById('email').value;
        const contactNo = document.getElementById('contact-no').value;
        const address = document.getElementById('address').value;

        const studentDetail = document.createElement('div');
        studentDetail.classList.add('student-detail');
        studentDetail.innerHTML = `
            <p><strong>Name:</strong> ${studentName}</p>
            <p><strong>ID:</strong> ${studentId}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact No.:</strong> ${contactNo}</p>
            <p><strong>Address:</strong> ${address}</p>
            <button class="delete-button">Delete</button>
            <hr>
        `;

        studentDetailsDiv.appendChild(studentDetail);

        const deleteButton = studentDetail.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            studentDetailsDiv.removeChild(studentDetail);
        });

        form.reset();
    });
});
