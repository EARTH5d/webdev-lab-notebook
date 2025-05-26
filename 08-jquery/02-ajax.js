$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDOM = (book) => {
    console.log(book.name);
    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h2>").text(book.name))
        .append($("<p>").text(book.authors[0]))
        .append($("<p>").text(book.released.substr(0, 4)))
        .append($("<p>").text(`${book.numberOfPages} pages`))
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,

      success: (data) => {
        data.forEach((book) => {
          addBookToDOM(book);
        });
      },

      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<div>").text(`An error occured. Please try again.`)
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
