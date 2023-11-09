export function createTable(data, columns) {
  
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    
    
    columns.map(column => {
        const th = document.createElement("th");
        th.textContent = column;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    data.map(item => {
        const row = document.createElement("tr");
        columns.map(column => {
            const cell = document.createElement("td");
            cell.textContent = item[column] || "-";
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}
