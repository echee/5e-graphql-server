import { Class, Subclass } from './connectors';

const resolvers = {
  Query: {
    class(_, args) {
      return Class.fetchById(args)
    },
    classes() {
      return Class.findAll();
    }
  },
  Class: {
    subclasses({ index }) {
      return Class.getSubclasses(index);
    }
  },
  Subclass: {
    features({ features }) {
      console.log(features);
      return Subclass.getFeatures(features);
    }
  }
};

export default resolvers;
