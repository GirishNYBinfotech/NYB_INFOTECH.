function reducer(state, action) {

  switch (action.type) {
    case "ADD_STUDENT":
      return {
        students: [...state.students, action.payload],
      };

    case "DELETE_STUDENT":
      return {
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "CLEAR_ALL":
      return {
        students: [],
      };

    default:
      return state;
  }

}
export default reducer;