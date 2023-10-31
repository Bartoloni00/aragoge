import PropTypes from 'prop-types';

export const Main = ({vista}) => {
  return (
    <main className="my-6">
        <h1 className="text-center">{vista}</h1>
    </main>
  );
};

// Especificamos el tipo de valor que debemos recibir en la vista
Main.propTypes = {
    vista: PropTypes.string.isRequired,
};

// Especificamos el valor default que se utilziará en caso de que no se mande ningun valor
Main.defaultProps = {
    vista: 'index.html'
  };