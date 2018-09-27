
Feature('Login');

Scenario('Login com e-mail e senha', (I) => {
    I.wait(3);
    I.click('#br.com.quiz.ciee:id/innerTextView');

    I.fillField('#br.com.quiz.ciee:id/edit_text_login', 'teste.ciee');
    I.fillField('#br.com.quiz.ciee:id/edit_text_password', 'testeciee');

    I.hideDeviceKeyboard();
    I.click('#br.com.quiz.ciee:id/innerTextView');

    I.wait(5);
    I.see('PLAY');
});

Scenario('Usuário inválido', (I) => {
    I.wait(3);
    I.click('#br.com.quiz.ciee:id/innerTextView');

    I.fillField('#br.com.quiz.ciee:id/edit_text_login', 'uahsuhasuas');
    I.fillField('#br.com.quiz.ciee:id/edit_text_password', 'aushauhsuahs');

    I.hideDeviceKeyboard();
    I.click('#br.com.quiz.ciee:id/innerTextView');

    I.wait(3);
    I.see('Esqueci minha senha ou usuário');
});