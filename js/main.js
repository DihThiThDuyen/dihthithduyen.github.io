// ===================== FORM LIÊN HỆ =====================
document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('contactForm');
	var status = document.getElementById('formStatus');

	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		var name = form.name.value.trim();
		var email = form.email.value.trim();
		var message = form.message.value.trim();
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!name || !email || !message) {
			status.textContent = 'Vui lòng điền đầy đủ họ tên, email và lời nhắn.';
			status.className = 'form-status form-status--error';
			return;
		}

		if (!emailPattern.test(email)) {
			status.textContent = 'Địa chỉ email không hợp lệ, vui lòng kiểm tra lại.';
			status.className = 'form-status form-status--error';
			return;
		}

		// Không có backend nên chỉ mô phỏng gửi thành công rồi reset form
		status.textContent = 'Cảm ơn ' + name + '! Lời nhắn của bạn đã được gửi thành công.';
		status.className = 'form-status form-status--success';
		form.reset();
	});
});
