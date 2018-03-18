import { Class, Subclass } from './connectors';

const resolvers = {
  Query: {
    class(_, args) {
      return Class.fetchById(args);
    },
    classes() {
      return Class.findAll();
    }
  },
  Class: {
    hitDie: ,
    subclasses({ index }) {
      return Class.getSubclasses(index);
    }
  },
  Subclass: {
    features({ features }) {
      return Subclass.getFeatures(features);
    }
  }
};

export default resolvers;
