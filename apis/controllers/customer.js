const mongoose = require('mongoose');
const Customer = require('../models/customer');

exports.add_customer_add = (req, res) => {

    const customer = new Customer({
        name: req.body.name,
        age: req.body.age,
        mobile: req.body.mobile,
        email: req.body.email
    });
    customer.save()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "Customer save successfully"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err
            });
        });
};

exports.get_customer_get = (req, res) => {
    Customer.find()
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: result
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err
            });
        })
};

exports.get_customer_by_id = (req, res) => {
    Customer.findById(req.params.customerId)
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: result,
                customerId: req.params.customerId
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err
            });
        })
};


exports.update_customer_update = (req, res) => {
    Customer.findByIdAndUpdate(req.params.customerId, { $set: req.body })
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "Customer Updated Successfully",
                customerId: req.params.customerId
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err
            });
        })
};

exports.delete_customer_delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.customerId)
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "Customer Deleted Successfully",
                customerId: req.params.customerId
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err
            });
        })
}