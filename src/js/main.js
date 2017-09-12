import Ajax from './ajax';

(function () {
  const viewer = document.getElementById('viewer');
  const btnGet = document.getElementById('get');
  const btnPost = document.getElementById('post');
  const btnPut = document.getElementById('put');
  const btnDel = document.getElementById('delete');
  const inputUserid = document.getElementById('userid');

  function render(data) {
    viewer.innerHTML = JSON.stringify(JSON.parse(data), null, 2);
  }

  btnGet.addEventListener('click', () => {
    viewer.innerHTML = '';

    const userid = inputUserid.value;
    const url = userid ? `/users/${userid}` : '/users';

    Ajax.get(url).then(render);
  });

  btnPost.addEventListener('click', () => {
    viewer.innerHTML = '';

    const userid = inputUserid.value;

    if (!userid) return alert('userid를 입력하세요');

    const password = document.getElementById('password').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    Ajax.post('/users', { userid, password, firstname, lastname })
      .then(render);
  });

  btnPut.addEventListener('click', () => {
    viewer.innerHTML = '';

    const userid = inputUserid.value;

    if (!userid) return alert('userid를 입력하세요');

    const password = document.getElementById('password').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    Ajax.put('/users', userid, { userid, password, firstname, lastname })
      .then(render);
  });

  btnDel.addEventListener('click', () => {
    viewer.innerHTML = '';

    const userid = inputUserid.value;

    if (!userid) return alert('userid를 입력하세요');

    Ajax.delete('/users', userid).then(render);
  });
}());
