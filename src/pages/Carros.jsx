import React from 'react'

import { Row , Col} from "react-bootstrap"
import Ca from "../components/card/Ca"
const Carros = () => {
  const carros =[
    {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
    {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
    {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
    {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
    {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
    {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
    {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
    {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
    {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
    {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
    {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
    {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
    {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
    {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
    {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
    {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
  ]
  return (
    <div>
    
    
    <Row xs={1} md={4} >
      
      {carros.map(item=>(
         <Col>   
        <Ca  marca={item.marca} modelo={item.modelo} imagem={item.foto} cor={item.cor} ano={item.ano} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
    
 

</div>
  )
}

export default Carros