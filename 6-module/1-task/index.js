/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.createElem();

    this.createTable(rows);

    this.createEvent();

  }
  
  createElem() {
    this.elem = document.createElement("table");
    this.elem.innerHTML = `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    </tbody>`;
  }

  createTable(rows) {
    for (let i = 0; i < rows.length; i++) {
      let updatedRow = 
      `<tr>
        <td>${rows[i].name}</td>
        <td>${rows[i].age}</td>
        <td>${rows[i].salary}</td>
        <td>${rows[i].city}</td>
        <td><button>X</button></td>
      </tr>`;
      this.elem.querySelector("tbody").innerHTML += updatedRow;
    }
  }

  createEvent() {
    this.elem.querySelector("tbody").addEventListener("click", (event) => {
      if (event.target.tagName == "BUTTON") {
        event.target.closest("tr").remove();
      }
    });
  }
}
