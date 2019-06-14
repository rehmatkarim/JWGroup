import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public name = {
    'Machinery & Equipment' : 'All Equipment & Machinery that are required in standard Construction & Developments Including Power Houses, Dams, irrigation water resources, High Altitude Buildings, Railways, Roads, Bridges, Tunnels & Canals etc.',
    'Trade & Logistics' : `To enhance trade between Pakistan & China in term of logistics as recently in Pakistan Phase one has been completed by CPEC and Phase II is in progress. Phase II mainly consists of railway track line to connect Xinjiang China to Abbottabad then Gawadar Pakistan which will make the transportation of logistics very efficiently and convenient.`,
    'Construction & Building Material' : 'In Pakistan, there are many sectors where investment can be done but following sectors are very important specially in backward areas of Khyber Pukhtunkhwa (KPK) situated in Northern areas on the rout of China Pakistan Economic Corridor (CPEC):<ul><li>Prime Minster Mr. Imran khan Naya Pakistan Housing Scheme 2018</li><li>Construction of Buildings, Roads / Bridges and Hospitals.</li><li>Small size Power Houses to generate electricity on water falls or other means.</li><li>Construction of Irrigation water resources. </li><li>Installation of Water Purification Plants.</li><li>Set up of Industrial Estates.</li></ul><p>All these are very important and productive sectors where investors can easily invest for on Built Operate (BO) or Built Operate Transfer (BOT) basis in all of four provinces including Kashmir and Northern areas.</p>',
    'Agriculture' : 'Pakistan\'s principal natural resources are Arable land and water. About 25% of Pakistan\'s agriculture accounts for about 21% of GDP and employs about 43% of the labor force. In Pakistan, the most agricultural province is Punjab where wheat and cotton are the most grown. Mango orchards are mostly found in Sindh and Punjab provinces that make Pakistan the world\'s 4th largest producer of mangoes. The most important crops are wheat, sugarcane, cotton, and rice, which together account for more than 75% of the value of total crop output. According to the Economic Survey of Pakistan the livestock sector contributes about half of the value added in the agriculture sector, amounting to nearly 11 per cent of Pakistan\'s GDP, which is more than the crop sector. Fishery and fishing industry plays an important role in the national economy of Pakistan. With a coastline of about 1045 km, Pakistan has enough fishery resources that remain to be fully developed. It is also a major source of export earning Aquaculture is also a rapidly developing industry in Pakistan.',
    'Import & Export' : '<ul><li>Imports of Pakistan in year 2017</li>The following product groups represent the highest dollar value in Pakistan’s import purchases during 2017. Also shown is the percentage share each product category represents in terms of overall imports into Pakistan. The following product groups represent the highest dollar value in Pakistan’s import purchases during 2017. Also shown is the percentage share each product category represents in terms of overall imports into Pakistan.\n<ol><li>Mineral fuels including oil: US$13.7 billion (23.9% of total imports)</li><li>Machinery including computers: $6.9 billion (11.9%)</li><li>Electrical machinery, equipment: $4.7 billion (8.3%)</li><li>Iron, steel: $3.4 billion (6%)</li><li>Vehicles: $2.7 billion (4.6%)</li><li>Organic chemicals: $2.4 billion (4.1%)</li><li>Animal/vegetable fats, oils, waxes: $2.4 billion (4.1%)</li><li>Plastics, plastic articles: $2.3 billion (4%)</li><li>Oil seeds: $1.4 billion (2.4%)</li><li>Vegetables: $981.2 million (1.7%)</li></ol>(Import’s cost details is given for the proper understanding of Pakistan’s needs in import market)<li>Exports of Pakistan:</li>Pakistan has bilateral and multilateral trade agreements with many nations and international organizations. It is a member of the World Trade Organization, part of the South Asian Free Trade Area agreement and the China-Pakistan Free Trade Agreement. Pakistan\'s exports continue to be dominated by cotton textiles and apparel, imports include petroleum and petroleum products, edible oil, chemicals, fertilizer, capital goods, industrial raw materials, and consumer product Pakistan exports rice, mandarin oranges (kinnows), clementine, mangoes, furniture, cotton fiber, cement, tiles, marble, textiles, clothing, leather goods, sports goods (renowned for footballs/soccer balls), cutlery, surgical instruments, electrical appliances, software, carpets, rugs, ice cream, livestock meat, chicken, powdered milk, wheat, seafood (especially shrimp/prawns), vegetables, processed food items, Pakistani-assembled Suzuki (to Afghanistan and other countries), defense equipment (submarines, tanks, radars), salt, onyx, engineering goods, and many other items. Pakistan produces and exports cements to Asia and the Middle East.</ul>',
    'Construction' : 'Construction value',
    'E-Commerce' : 'Pakistan\'s e-trading mainly involves buying and selling goods and services using internet or telephone, through the use of electronic means such as computer, fax machine, cellular phone, automated teller machines (ATM) and other electronic appliances with or without using inter-net. Online banking, e-ticketing for air traveling, share trading in stock exchange are few examples of e-commerce of modern advancement. With its potential, e-trading can reduce the cost per transaction, increase efficiency, support contest, lower prices and boost international demand. It can open new area for business in service sector like on-line education, medical services, consultancy and data exchange. It can also provide expansion in trade through domestic and international market research, advertising and marketing. In the financial services area it can make easy and speedy transactions and transfer of money at a minimum risk. Electronically distribution of offer with provision of transaction details i.e. description of offer, quality, cost, guarantee, validity, discounts, quantity etc. is carried out through automated trade execution. Most commonly, three categories are well recognized under e-commerce, namely: <ol><li>Business-to-consumer (B2C) e-commerce: customers deal directly with the organization, avoiding any intermediaries</li><li>Business-to-business (B2B) participants are organizations</li><li>Consumer-to-consumer (C2C) participants are individuals, with one serving as the buyer and the other as the seller</li></ol>China’s Alipay has been recently introduced in Pakistan. Also there is Daraz.pk as well but it has sold to Alipay by his owner. E-commerce/E-Trade is now an emerging business opportunity in Pakistan.',
    'Electric Appliances' : 'There are numerous home appliances manufacturing companies working in Pakistan, manufacturing the international quality appliances locally. But Mostly Pakistan imports the most of the electronics & home appliances from abroad especially solar panels etc.',
    'Textiles' : 'The Textile industry in Pakistan is the largest manufacturing industry in Pakistan. Pakistan is the 8th largest exporter of textile commodities in Asia. Textile sector contributes 8.5% to the GDP of Pakistan. In addition, the sector employs about 45% of the total labor force in the country (and 38% of the manufacturing workers).',
    'Handicrafts & Artifact' : '<p>Pakistan has a rich and diverse history of handicrafts. The entire wealth of timeless Pakistani handicrafts has survived through ages. The legacy of Pakistani culture promises everything- beauty, dignity, form and style. Every city has its own handicrafts specialty ranging from fabric, material, embroidery, to jewelry, carving, mirror work and other handicraft items. Each color, style, design and motif carries with it a unique symbol portraying the culture of that particular area and builds on people’s indigenous skills. The immense magic created by Pakistani hands is visible from the timeless artistry of the dazzling semi-precious jewelry, exquisite furniture, colorful toys and dolls, beautiful paintings and enthralling sculptures.</p><p> Handicrafts of Pakistan are precious stones in the bejeweled crown of Pakistani culture and heritage. Be it intricately decorated metal craft or some marvelous marble inlay work or some exquisite paintings, Pakistani handicrafts are going places with their ethnic designs and flourishing textures.</p><p> The time stands testimony to the evolution of the art and craft as the civilization grew from cave to the modern cities, and now Pakistani handicraft is the integrated part of the Pakistani culture leaving the whole world amazed and itching for more.</p>'
  };
  
  public heading: string;
  constructor(private modalService: NgbModal){

  }


  open(content, type) {
      this.heading = type;


      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      }, (reason) => {

      });
    }
  ngOnInit() {
    }



}


