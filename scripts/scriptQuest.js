var index = 1;
function startQuest()
{
	replaceContext();
	document.getElementById('left-choice').onclick = function(){ go('a'); }
	document.getElementById('right-choice').onclick = function(){ go('b'); }
	document.getElementById('repeat').onclick = repeatQuest;
}

function replaceContext(){
	document.getElementById('upper').innerHTML = selectContext(index);
	document.getElementById('left-choice').innerHTML = selectContext(index+'a');
	if (!document.getElementById('left-choice').innerHTML)
	{
		document.getElementById('left-choice').style.display = 'none';
		document.getElementById('right-choice').style.display = 'none';
		document.getElementById('repeat').style.display = 'inline-block';
		takeAchivement();
	}
	document.getElementById('right-choice').innerHTML = selectContext(index+'b');
}
function go(side){
  index = (side == 'a') ? index * 2 : index * 2 + 1;
  replaceContext();
}
function repeatQuest(){
	document.getElementById('left-choice').style.display = 'inline-block';
	document.getElementById('right-choice').style.display = 'inline-block';
	document.getElementById('repeat').style.display = 'none';
	index = 1;
	replaceContext();
}
function takeAchivement(){
	var desc = '';
	var pos = '';
	if (index == 4){
		desc = 'ДЖ грустит';
		pos = '0px -50px';
	}
	if (index == 6){
		desc = 'Король лени';
		pos = '0px 0px';
	}
	if (index == 10){
		desc = 'Аренда требует жертв';
		pos = '-50px -50px';
	}
	if (index == 14){
		desc = 'Че-т приуныл';
		pos = '-100px 0px';
	}
	if (index == 62){
		desc = 'гули-гули-гули';
		pos = '-50px 0px';
	}
	if (index == 126){
		desc = 'Доебался все-таки';
		pos = '-100px -50px'
	}
	if (!desc) return;
	document.getElementById('name-achivement').innerHTML = desc;
	document.getElementById('img-achivement').style.backgroundPosition = pos;
	makeAchivement();
}
function makeAchivement(){
	document.getElementById('achivement').style.display = 'block';
	setTimeout(function(){
		document.getElementById('achivement').style.display = 'none';
	}, 2000);
}
function selectContext(path){
  var s = '';
  if (path == '1')
	s = 'Вы - Ева!<br>'+
		'Шел 2019 год и Вам захотелось отдохнуть.<br>'+
		'Вы находитесь возле манежа. Сейчас 13:40 и время идти на трешу.';
  if (path == '1a')
	s = 'Пойти на трешу.';
  if (path == '1b')
	s = 'Забить на трешу, мне лень.';

  if (path == '2')
	s = 'Да, это не реальный вариант. Но это игра, по этому он и пошел на трешу.<br>'+
		'Подходя к манежу она заметила ДЖ.';
  if (path == '2a')
	s = 'Не обращать на него внимания.';
  if (path == '2b')
	s = 'Помахать ему рукой, как долбоеб.';

  if (path == '3')
 	s = 'Собственно, Ева хотела, чтобы ее выгнали, поэтому он прилагал для этого все усилия.<br>'+
		'Чем бы заняться в свободное время?';
  if (path == '3a')
	s = 'Покурить перед манежем.';
  if (path == '3b')
	s = 'Поорать - сколько я зарабатываю';

  if (path == '4')
	s = 'Как оказалось, люди вокруг заметили изменение в поведении Евы.<br>'+
		'Все подумали, что он классная и стали с ней тусить.<br>'+
		'Вы проиграли.';

  if (path == '5')
	s = 'Оказалось, что это был не ДЖ, а Макс из будущего...<br>'+
		'Долгая история, короче.';
  if (path == '5a')
	s = 'Пойти к ней';
  if (path == '5b')
	s = 'Просто идти дальше';

  if (path == '6')
	s = 'Ева стала так усердно тренить, что ей тренер'+
		' выделил 20кг предтрена, автомобиль и квартиру в Киеве.<br>'+
		'В общем, Вы проиграли.';

  if (path == '7')
	s = 'К сожалению, никто вас не услышал<br>'+
		'(всм похуй).'
  if (path == '7a')
	s = 'Пойти рассказать кому-то в манеже.';
  if (path == '7b')
	s = 'Позвонить Максу.';

  if (path == '10')
	s = 'Ева отлично поладила с Максом.<br>'+
		'Они очень долго сплетничали и смеялись.<br>'+
		'Внезапно, Макс из будущего пырнул Еву, забрал все деньги и смылся.<br>'+
		'Плата за квартиру - она такая.<br>'+
		'Вы потеряли сознание от потери крови.<br>'+
		'Игра окончена.';

  if (path == '11')
    s = 'Все таки Ева же не такая плохая.<br>'+
		'От этой мысли Ева улыбнулась.<br>'+
		'Жаль, что от этого случился ядерный взрыв.<br>'+
		'Ну, как бы это правильно сказать...<br>'+
		'Вы проиграли.';

  if (path == '14')
	s = 'Ева не знала, как выглядят здравый смысл.<br>'+
		'Гугл картинки выдавал только его фото.<br>'+
		'Ева приуныл и желание отдохнуть пропало.<br>'+
		'Вы проиграли.';

  if (path == '15')
	s = '-Ало, Пиздюк! Го увидимся!<br>'+
		'-Да, погнали.<br>'+
		'-Бля, я уже не хочу...';
  if (path == '15a')
	s = 'Посмотреть истории в instagram';
  if (path == '15b')
	s = 'Наебать людей';

  if (path == '30')
	s = 'А спонсор этой игры - Одиночество!<br>'+
		'Одиночество - у меня кончились идеи.<br>'+
		'Вы проиграли короч.';

  if (path == '31')
	s = '-Ублюдок, мать твою! Гавно собачье! Онанист чертов! Жопа!<br>'+
		'-Милая, с вами все нормально?<br>'+
		'-Ты хочешь меня трахнуть? Да я тебя сама трахну, урод...<br>'+
		'-Чувак с Тиндера понял, что продолжать диалог нет смысла.';
  if (path == '31a')
	s = 'Почитать статью про НЛП';
  if (path == '31b')
	s = 'Позвонить ДЖ';

  if (path == '62')
	s = 'Оказалось, статья была не про НЛП, а о Изотерике. '+
		'У Евы началась паранойя, и ей везде казались интерполовцы. '+
		'Не выдержав такой нагрузки, она сбежал из страны и больше ее никто не видел.<br>'+
		'Тут непонятно, проиграли Вы или нет.';

  if (path == '63')
	s = '-Ало, ДЖ! Можно я не поеду на соревы, я устала!<br>'+
		'-Можешь на трешу не приходить больше!<br>'+
		'Бип...Бип...Бип...<br>'+
		'Шутка была...наверное...';
  if (path == '63a')
	s = 'Позвонить ДЖ еще раз';
  if (path == '63b')
	s = 'Уехать в индию';

  if (path == '126')
	s = '-Вибачте, але абонент не може прийняти дзвінок ви заблокованi.<br>'+
		'Молодец, довыебывался...<br>'+
		'Игра окончена.';
  if (path == '127')
	s = 'Мир - удивительная вещь!<br>'+
		'Оказывается, жизьнь проста надо просто ценить мелочи!<br>'+
		'К сожалению, Ева этого не знал и ей пришлось уехать в индию.<br>'+
		'Вы проиграли.';
  return s;
}
