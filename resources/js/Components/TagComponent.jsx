import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TagComponent = ({tags, setTags}) => {


  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newTags = Array.from(tags);
    const [reorderedTag] = newTags.splice(result.source.index, 1);
    newTags.splice(result.destination.index, 0, reorderedTag);

    setTags(newTags);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tags" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-wrap gap-3"
          >
            {tags.map((tag, index) => (
              <Draggable key={tag} draggableId={tag} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-full shadow-md transform transition-all hover:scale-105"
                  >
                    <span className="text-sm">#{tag}</span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TagComponent;
