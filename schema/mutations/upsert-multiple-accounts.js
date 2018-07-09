const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')


const AccountType = require('../types/account')

const AccountInputType = require('../inputs/account-input')

module.exports = {
  type: AccountType,
  args: {
    input: { type: new GraphQLNonNull(new GraphQLList(AccountInputType)) }
  },
  resolve: (obj, { input }, { salesforce }) => {
    return salesforce.upsertAccount(input, 'ExtId__c')
  }
}