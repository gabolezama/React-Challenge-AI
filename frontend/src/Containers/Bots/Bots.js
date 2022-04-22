import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import DatePicker, {registerLocale} from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
registerLocale('es', es)

export default function Bots() {
    const { token } = useParams()
    const [users, setUsers] = useState([])
    const [tableData, setTableData] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(
        async()=>{
            const getClients = await fetch(`https://admindev.inceptia.ai/api/v1/clients/`, {
                method: 'GET',
                headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
                })
            })
            

            setTimeout(async()=>{

                const response = await getClients.json()
                setUsers(response)
            },1000)
            
    },[])

    const handleClientSelection = async (clientId)=>{
        try{
            if( moment(startDate).isAfter(moment(endDate)) ){
                alert(`La fecha DESDE está después que la fecha HASTA. Por favor realice una seleeccion correcta.`)
                setStartDate( new Date())
                setEndDate( new Date())
            }
            const startFormatted = moment(startDate).format('YYYY-MM-DD');
            const endFormatted = moment(endDate).format('YYYY-MM-DD');
            const getChats = await fetch(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=${clientId}&local_updated__date__gte=${startFormatted}&local_updated__date__lte=${endFormatted}`,
            {
                method: 'GET',
                headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
                })
            })

            setTimeout(async()=>{

                const response = await getChats.json()
                setTableData(response.results)
            },1000)
            
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div style={{display:'flex', flexDirection:'column', padding: 10 }} >
            <div style={{display: 'flex', justifyContent:'right', backgroundColor:'blue'}}>
                <p style={{ marginRight:'2rem', marginTop:10, color: 'white'}}>
                    Luego de seleccionar un rango de fechas, haga clic sobre un cliente
                </p>
                <div style={{display:'flex', flexDirection: 'row', padding:10, width: '40%'}}>
                    <label style={{marginRight:10, color: 'white'}}>Desde: </label>
                    <DatePicker locale="es" selected={startDate} onChange={(date) => setStartDate(date) }/>
                    <label style={{marginRight:10, color: 'white'}}>Hasta: </label>
                    <DatePicker locale="es" selected={endDate} onChange={(date) => setEndDate(date)}/>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row' }} >
                <table class="table" style={{width:'15%', backgroundColor:'lightblue'}}>
                    <thead>
                    {
                        Array.isArray(users) &&
                        users.map((user)=>(
                            <div>
                                <h6 key={user.id} id={user.id} scope="col" onClick={(e)=> handleClientSelection(e.target.id)}>{user.name.toUpperCase()}</h6>
                            </div>
                        ))
                    }        
                    </thead>
                </table>
                
                <table class="table table-striped table-hover" style={{width:'80%'}}>
                    <thead>
                        <tr>
                            <th scope="col">Gestionado</th>
                            <th scope="col">ID Caso</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Orden</th>
                            <th scope="col">Llamada</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Array.isArray(tableData) &&
                        tableData.map((row)=>{
                            return(
                                    <tr>
                                        <td>{row.last_updated}</td>
                                        <td>{row.case_uuid}</td>
                                        <td>{row.phone}</td>
                                        <td>{row.extra_metadata.dni}</td>
                                        <td>{row.extra_metadata.grupo}</td>
                                        <td>{row.extra_metadata.orden}</td>
                                        <td>{row.case_duration}</td>
                                        <td>{row.case_result.name}</td>
                                    </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
                { tableData.length === 0 &&
                    <p style={{marginLeft:'1rem'}}>
                        Por ahora no hay datos para mostrar.
                        Por favor haga click sobre un cliente y/o
                        seleccione un rango de fechas válido.
                    </p>
                }
        </div>
    )
}
