select * from landlord where name like 'Bob Eckenrode';

select pid, house_number, street from property where llid = (select llid from landlord where name like 'Bob Eckenrode');

