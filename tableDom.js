function tableGenerate() {
    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');
    let needRow = prompt("Enter row number:")
    let needCell = prompt('Enter cell number: ')
    for (let i = 0; i < needRow; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < needCell; j++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode('cell in row ${i} , column ${j}');

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute('border', '2');
}