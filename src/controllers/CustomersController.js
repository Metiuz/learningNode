const Customer = require("../models/customerModel");

module.exports = {
    async all(req, res){
        try{
            const customers = await Customer.findAll()
            res.status(200).json(customers)
        } catch(error){
            res.status(400).send(error);
        }
    },
    async one(req, res){
        try{
            const id = req.params.id;
            const customer = await Customer.findOne({ where: { id }});

            if (!customer) {
                return res.status(400).json("Cliente não encontrado!!");
            }
            res.status(200).json(customer)
        } catch(error){
            res.status(400).send(error);
        }
    }
    ,
    async create(req, res){
        try{
            await Customer.create(req.body);
            res.status(200).json("Cliente agendado!");
        } catch(error){
            res.status(400).send(error);
        }
    },
    async update(req, res){
        try{
            const { name, cell_number, marked_date, type_service } = req.body;
            const id = req.params.id;

            const customer = await Customer.findOne({ where: { id }});

            if (!customer) {
                return res.status(400).json("Cliente não encontrado!!");
            }

            customer.name = name;
            customer.cell_number = cell_number;
            customer.marked_date = marked_date;
            customer.type_service = type_service;

            await customer.save();
            res.status(201).json("Cliente atualizado!")
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async delete(req, res){
        try{
            const id = req.params.id;
            const customer = await Customer.destroy({ where: { id } });

            if(!customer) {
                return res.status(400).json("Cliente não encontrado!")
            }

            res.status(201).json("Cliente removido!");
        } catch(error){
            res.status(400).send(error);
        }
    }
}

// class CustomersController {
//     // Listagem dos registros
//     index(req, res){
//         return res.json(customers);
//     }

//     // Recupera um Customer
//     show(req, res){
//         const id = parseInt(req.params.id);
//         const customer = customers.find(item => item.id === id);
//         const status = customer ? 200 : 404;
//         return res.status(status).json(customer);
//     }

//     // Cria um novo Customer
//     create(req, res){
//         const { name, site } = req.body;
//         const id = customers[customers.length - 1].id + 1;
//         const newCustomer = { id, name, site };
//         customers.push(newCustomer);
//         return res.status(201).json(newCustomer);
//     }

//     // Atualiza um Customer
//     update(req, res){
//         const id = parseInt(req.params.id);
//         const { name, site } = req.body;
//         const index = customers.findIndex(item => item.id === id);
//         const status = index >=0 ? 200 : 404;

//         if(index >= 0) {
//             customers[index] = { id: parseInt(id), name, site };
//         }
//         return res.status(status).json(customers[index]);
//     }

//     // Exclui um Customer
//     destroy(req, res){
//         const id = parseInt(req.params.id);
//         const index = customers.findIndex(item => item.id === id);
//         const status = index >=0 ? 200 : 404;

//         if(index >=0){
//             customers.splice(index, 1);
//         }
//         return res.status(status).json();
//     }
// }

// export default new CustomersController();