const messages = {
	en: {
		button: {
			home: "Home",
			login: "login",
			register: "register",
			submit: "submit",
			reset: "reset",
			forgot_password: 'forgot password',
			send: 'send',
			user: 'user',
			send_activation_link: 'send activation link',
			logout: 'log out',
			language: 'language',
			save: 'save'
		},
		home: {
			title: 'home'
		},
		registration: {
			title: 'Registration',
			first_name: 'First name',
			last_name: 'Last name',
			email: 'Email',
			password: 'Password',
			repeat_password: 'Repeat password',
			password_hint: `<b-row>
												<b-col></b-col>
												<b-col>
													<div class="float-lg-left text-left">
														<p>&#10003 8 characters minimum</p>
														<p>&#10003 One uppercase letter</p>
													</div>
													<div class="float-lg-right text-left">
														<p>&#10003 One lowercase letter</p>
														<p>&#10003 One digit</p>
													</div>
												</b-col>
												<b-col></b-col>
											</b-row>`,
			omniauth_text: 'Via your social networks',
			account_exists: 'Already have an account?',
			emailExists: 'Sorry, user with this email already exists.',
			success_alert: 'Activation link was sent to your email.',
			error_alert: 'Ooopsie, something went wrong.'
		},
		activation: {
			success_title: "Registration confirmed",
			success_alert: "You are now registered and can log in to your account",
			error_title: "Registration was not confirmed",
			error_alert: 'Ooopsie, something went wrong.',
      invalid_alert: 'Something went wrong with your data.',
		},
		login: {
			title: "Login",
			email: 'Email',
			password: 'Password',
			omniauth_text: 'Via your social networks',
			go_to_register: 'Don\'t have an account?',
			success_alert: 'You successfully logged in.',
			error_alert: 'Ooopsie, something went wrong.',
			wrong_pass_alert: 'Sorry, your password is incorrect',
			no_validation_alert: 'Sorry, your account is not validated.'
		},
		forgot_password: {
			title: "Restore password",
			message: "Forgot password?",
			success_alert: "Check your email to restore your password.",
			error_alert: "User with this email doesn't exist.",
			error_title: "Sorry, we cannot change your password right now."
		},
		profile: {
			profile_title: 'profile',
			settings_title: 'settings',
			success_alert: 'All good, your data was saved.',
			profile: {

			},
			settings: {
				change_password: 'Change password',
				change_email: 'Change email',
				change_info: 'Change personal info',
				old_password: 'Old password',
				new_password: 'New password',
				new_password_repeat: 'Repeat new password'
			}
		},
	},
	ru: {
		button: {
			home: "главная",
			login: "войти",
			register: "регистрация",
			submit: "подтвердить",
			reset: "очистить",
			forgot_password: 'Я не помню свой пароль',
			send: 'отправить',
			user: 'пользователь',
			send_activation_link: 'отправить ссылку активации',
			logout: 'выйти',
			language: 'язык',
			save: 'сохранить'
		},
		home: {
			title: 'Главная'
		},
		registration: {
			title: "Регистрация",
			first_name: 'Имя',
			last_name: 'Фамилия',
			email: 'Email',
			password: 'Пароль',
			repeat_password: 'Повторите пароль',
			password_hint: `<b-row>
												<b-col></b-col>
												<b-col>
													<div class="float-lg-left text-left">
														<p>&#10003 Минимум 8 символов</p>
														<p>&#10003 Одна заглавная буква</p>
													</div>
													<div class="float-lg-right text-left">
														<p>&#10003 Одна строчная буква</p>
														<p>&#10003 Одна цифра</p>
													</div>
												</b-col>
												<b-col></b-col>
											</b-row>`,
			omniauth_text: 'Через социальные сети',
			account_exists: 'Уже есть аккаунт?',
			emailExists: 'Извините, пользователь с данным email уже существует.',
			success_alert: 'Отлично! Ссылка для активации отправлена на Ваш email.',
			error_alert: 'Ой. Что-то пошло не так.'
		},
		activation: {
			success_title: "Регистрация подтверждена",
			success_alert: "Вы успешно подтвердили регистрацию и теперь можете войти в свой аккаунт.",
			error_title: "Регистрация не подтверждена",
			error_alert: 'Ой. Что-то пошло не так.',
      invalid_alert: "К сожалению, произошла ошибка с Вашими данными.",
		},
		login: {
			title: "Войти",
			email: 'Email',
			password: 'Пароль',
			omniauth_text: 'Через социальные сети',
			go_to_register: 'Нет аккаунта?',
			success_alert: 'Вы успешно вошли в свой аккаунт.',
			wrong_pass_alert: 'Вы ввели неверный пароль.',
			no_validation_alert: 'Извините, Ваш аккаунт не подтвержден.',
			error_alert: 'Ой. Что-то пошло не так.'
		},
		forgot_password: {
			title: "Восстановить пароль",
			message: "Забыли пароль?",
			success_alert: "Проверьте почту для восстановления пароля.",
			error_alert: "Пользователя с таким email не существует.",
			error_title: "Извините, но сейчас мы не можем изменить Ваш пароль."
		},
		profile: {
			profile_title: 'профиль',
			settings_title: 'настройки',
			success_alert: 'Ваши данные были сохранены.',
			profile: {

			},
			settings: {
				change_password: 'Изменить пароль',
				change_email: 'Изменить email',
				change_info: 'Изменить персональные данные',
				old_password: 'Старый пароль',
				new_password: 'Новый пароль',
				new_password_repeat: 'Повторите новый пароль'
			}
		},
	},
	ua: {
		button: {
			home: "головна",
			login: "увійти",
			register: "реєстрація",
			submit: "підтвердити",
			reset: "очистити",
			forgot_password: "Я не пам'ятаю свій пароль",
			send: 'надіслати',
			user: 'користувач',
			send_activation_link: 'надіслати посилання активації',
			logout: 'вийти',
			language: 'мова',
			save: 'зберегти'
		},
		home: {
			title: 'Головна'
		},
		registration: {
			title: "Реєстрація",
			first_name: "Ім'я",
			last_name: 'Прізвище',
			email: 'Email',
			password: 'Пароль',
			repeat_password: 'Повторіть пароль',
			password_hint: `<b-row>
												<b-col></b-col>
												<b-col>
													<div class="float-lg-left text-left">
														<p>&#10003 Мінімум 8 символів</p>
														<p>&#10003 Одна велика літера</p>
													</div>
													<div class="float-lg-right text-left">
														<p>&#10003 Одна маленька літера</p>
														<p>&#10003 Одна цифра</p>
													</div>
												</b-col>
												<b-col></b-col>
											</b-row>`,
			omniauth_text: 'Через соціальні мережі',
			account_exists: 'Вже маєте акаунт?',
			emailExists: 'Вибачте, користувач з таким email вже існує.',
			success_alert: 'Чудово! Лист з посиланням активації відправлено на Ваш email.',
			error_alert: 'Ой. Щось пішло не так.'
		},
		activation: {
			success_title: "Реєстрацію підтверджено",
			success_alert: "Ви успішно підтвердили свою реєстрацію та можете увійти до свого акаунту.",
			error_title: "Реєстрацію не підтверджено",
			error_alert: 'Ой. Щось пішло не так.',
      invalid_alert: "Нажаль, сталась помилка, пов'язана з Вашими даними.",
		},
		login: {
			title: "Увійти",
			email: 'Email',
			password: 'Пароль',
			omniauth_text: 'Через соціальні мережі',
			go_to_register: 'Немає акаунта?',
			success_alert: 'Ви успішно увійшли до свого акаунту.',
			wrong_pass_alert: 'Неправильний пароль.',
			no_validation_alert: 'Активуйте свій акаунт, будь ласка.',
			error_alert: 'Ой. Щось пішло не так.'
		},
		forgot_password: {
			title: "Відновити пароль",
			message: "Забули пароль?",
			success_alert: "Перевірте пошту для відновлення пароля.",
			error_alert: "Користувача з таким email не існує.",
			error_title: "Вибачте, але зараз ми не можемо змінити Ваш пароль."
		},
		profile: {
			profile_title: 'профіль',
			settings_title: 'налаштування',
			success_alert: 'Ваші дані було збережено.',
			profile: {

			},
			settings: {
				change_password: 'Змінити пароль',
				change_email: 'Змінити email',
				change_info: 'Змінити персональні дані',
				old_password: 'Старий пароль',
				new_password: 'Новий пароль',
				new_password_repeat: 'Повторіть новий пароль'
			}
		},
	}
}

export default messages
