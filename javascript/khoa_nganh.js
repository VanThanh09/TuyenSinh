// function loadCell() {
//     fetch("../data/khoa_nganh/majors.json").then(res => res.json()).then(data => {
//         const tableBody = document.getElementById("table-body");
//         for (let p of data) {
//             const row = document.createElement("tr");

//             const khoaCell = document.createElement("td");
//             khoaCell.textContent = p["Khoa"];
//             row.appendChild(khoaCell);

//             const nganhCell = document.createElement("td");
//             const ul = document.createElement("ul");
//             for (const nganh of p["Ngành"]) {
//                 const li = document.createElement("li");
//                 li.textContent = nganh;
//                 ul.appendChild(li);
//             }
//             nganhCell.appendChild(ul);
//             row.appendChild(nganhCell)

//             const websiteEmailCell = document.createElement("td");
//             const websiteLink = document.createElement("a");
//             websiteLink.target = "_blank";
//             websiteLink.href = p["Website"];
//             websiteLink.textContent = p["Website"];
//             const emailSpan = document.createElement("span");
//             emailSpan.textContent = "/";
//             const emailLink = document.createElement("a");
//             emailLink.href = "mailto:" + p["Email"];
//             emailLink.className = "mail";
//             emailLink.target = "_blank";
//             emailLink.textContent = p["Email"];
//             websiteEmailCell.appendChild(websiteLink);
//             websiteEmailCell.appendChild(emailSpan);
//             websiteEmailCell.appendChild(emailLink);
//             row.appendChild(websiteEmailCell);

//             const dienThoaiCell = document.createElement("td");
//             dienThoaiCell.textContent = p["Điện thoại"];
//             row.appendChild(dienThoaiCell);

//             const diaChiCell = document.createElement("td");
//             diaChiCell.textContent = p["Địa chỉ"];
//             row.appendChild(diaChiCell);

//             tableBody.appendChild(row);
//         }
//     })
// }

function loadMarjor() {
    fetch("../data/khoa_nganh/majors.json").then(res => res.json()).then(data => {

        let h = "";
        for (let p of data) {
            const ul = document.createElement("ul");
            for (const nganh of p["Ngành"]) {
                const li = document.createElement("li");
                li.textContent = nganh;
                ul.appendChild(li);
            }
            h+= `
            <tr>
                <td>${p.Khoa}</td>
                <td style="text-align: unset;">
                    ${ul.outerHTML}
                </td>
                <td style="word-break: break-all;">
                    <a href="mailto:${p.Email}" class="mail" target="_blank">${p.Email}</a>
                </td>
                <td>${p.Phone}</td>
                <td>${p.Address}</td>
            </tr>
            `;
        }
        let e = document.getElementById("table-body");
        e.innerHTML = h;
    })
}

window.onload = function() {
    loadMarjor();
};