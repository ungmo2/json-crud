export default class Ajax {
  static get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('POST', url);
      // 서버로 전송하는 데이터의 mime type 설정
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(data));
      // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // // escaping untrusted data
      // req.send(Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&'));

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  static put(url, id, data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('PUT', `${url}/${id}`);
      // 서버로 전송하는 데이터의 mime type 설정
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(data));

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  static delete(url, id) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('DELETE', `${url}/${id}`);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }
}
