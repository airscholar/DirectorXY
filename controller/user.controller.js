const express = require('express');
// const
exports.userLogin = (request, result, next) => {
  result.status(200).send({
    message: 'user logged in successfully'
  });
}
