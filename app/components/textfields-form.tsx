type Props = {
  operation: null | string;
  textfieldName: React.ReactNode;
  textfieldNewName: React.ReactNode;
  textfieldLike: React.ReactNode;
  textfieldPhotos: React.ReactNode;
  textfieldSubs: React.ReactNode;
};

export const PostBodyForm: React.FC<Props> = ({
  operation,
  textfieldLike,
  textfieldName,
  textfieldNewName,
  textfieldPhotos,
  textfieldSubs,
}) => {
  switch (operation) {
    case 'CREATE': {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {textfieldName}
          {textfieldLike}
          {textfieldPhotos}
          {textfieldSubs}
        </div>
      );
    }
    case 'DELETE': {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {textfieldName}
        </div>
      );
    }
    case 'UPDATE': {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {textfieldName}
          {textfieldNewName}
          {textfieldLike}
          {textfieldPhotos}
          {textfieldSubs}
        </div>
      );
    }
    default: {
      return <div></div>;
    }
  }
};
