const Joi = require('joi');
const {
  NotFound,
  UnprocessibleEntry,
} = require('../../utils/clientErrors');

const validateGenericItemBody = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const { details } = error;
    throw UnprocessibleEntry(
      details.map((err) => err.message).join(),
    );
  }
  return next();
};

const validateGenericItemId = (req, res, next) => {
  const schema = Joi.object({
    genericItemId: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    throw NotFound('genericItem not found');
  }
  return next();
};

module.exports = {
  validateGenericItemBody,
  validateGenericItemId,
};
