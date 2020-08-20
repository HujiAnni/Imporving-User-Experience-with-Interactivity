$(document).ready(function() {
  $("#beagle").on('click',function() {
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").addClass("hidden");
  });

  $("#border_collie").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").removeClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").addClass("hidden");
  });

  $("#cocker_spaniel").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").removeClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").addClass("hidden");
  });

  $("#corgi").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").removeClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").addClass("hidden");
  });

  $("#german_shepherd").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").removeClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").addClass("hidden");
  });

  $("#golden_retriever").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").removeClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").addClass("hidden");
  });

  $("#maltese").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").removeClass("hidden");
    $(".pit_bull").addClass("hidden");
  });
  $("#pit_bull").on('click',function() {
    $(".beagle").addClass("hidden");
    $(".border_collie").addClass("hidden");
    $(".cocker_spaniel").addClass("hidden");
    $(".corgi").addClass("hidden");
    $(".german_shepherd").addClass("hidden");
    $(".golden_retriever").addClass("hidden");
    $(".maltese").addClass("hidden");
    $(".pit_bull").removeClass("hidden");
  });
  $("#reset").on('click',function() {
    $(".beagle").removeClass("hidden");
    $(".border_collie").removeClass("hidden");
    $(".cocker_spaniel").removeClass("hidden");
    $(".corgi").removeClass("hidden");
    $(".german_shepherd").removeClass("hidden");
    $(".golden_retriever").removeClass("hidden");
    $(".maltese").removeClass("hidden");
    $(".pit_bull").removeClass("hidden");
  });
});
