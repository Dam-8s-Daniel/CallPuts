import React,{useState, useEffect}  from 'react';
import {Link, useNavigate} from 'react-router-dom'
import InvestmentList from './InvestmentList'
import plus from '../plus.png'

export default function Portfolio({setInvestmentToEdit}) {
    const [investments, setInvestments] = useState([]);
    const navigate = useNavigate();

    const onEdit = async investment =>{
        setInvestmentToEdit(investment);
        navigate('/edit-investment')
    }

    const onDelete = async _id => {
        const response = await fetch(`/portfolio/${_id}`, {method: 'DELETE'});
        if(response.status === 204){
            const newInvestment = investments.filter(m => m._id !== _id);
            setInvestments(newInvestment);
        }else{
            console.error(`Failed to delete investment with _id = ${_id}, status code = ${response.status}`)
        }
    };

    const loadInvestments = async () => {
        const response = await fetch('/portfolio');
        const data = await response.json();
        setInvestments(data);
    };

    useEffect( () => {
        loadInvestments();
    }, []);

    return (
        <>
        <h3 className='Portfolio-table-name'>Portfolio</h3>
        
        <InvestmentList investments={investments} onDelete={onDelete} onEdit={onEdit}></InvestmentList>
        <Link to='/add-investment'><img className='plusImg' src={plus}/></Link>
        </>
    )



}