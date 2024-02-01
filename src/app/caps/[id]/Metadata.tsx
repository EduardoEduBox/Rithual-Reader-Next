const GenerateMetadata = async ({ params }: { params: { id: number } }) => {
  const product = params.id;

  return { title: "(૨¡Ƭષαℓ Cap: " + product }; // Use the product data to set the title dynamically
};

export default GenerateMetadata;
