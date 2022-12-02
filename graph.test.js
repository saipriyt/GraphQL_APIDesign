// const { ApolloServer } = require("apollo-server");
// const {DoctorList} = require("./schema/data.js");
// const assert = require('assert');
//
// // For clarity in this example we included our typeDefs and resolvers above our test,
// // but in a real world situation you'd be importing these in from different files
// const typeDefs = `#graphql
// type Query {
// doctor(id: ID!): String
// }
// `;
// const resolvers = {
//     Query: {
//         doctor: (_, { id }) => DoctorList[Number(id)-1].name,
//     },
// };
//
//
// it('returns doctor', async () => {
//     const testServer = new ApolloServer({
//         typeDefs,
//         resolvers,
//         });
//
//
//     const response = await testServer.executeOperation({
//         query: 'query doctor($id: ID) { name: $name }',
//         variables: { id: '2' },
//     });
//
//     // Note the use of Node's assert rather than Jest's expect; if using
//     // TypeScript, `assert`` will appropriately narrow the type of `body`
//     // and `expect` will not.
//     assert.equal(response.kind,'single');
//     //expect(response.body.singleResult.data).toBe("Mathila");
//     // assertFalse(body.kind === 'single');
//     // expect(response.body.singleResult.errors).toBeUndefined();
//     // expect(response.body.singleResult.data?.hello).toBe('Hello world!');
//
// });