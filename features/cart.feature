Feature: Carrito de la compra en Demoblaze

  Background:
    Given el usuario ha iniciado sesión

  Scenario Outline: Añadir el primer producto de una categoría y eliminarlo del carrito
    Given el usuario está en la categoría "<categoria>"
    When abre el primer producto de la lista
    And lo añade al carrito
    And abre el carrito
    Then el producto aparece en el carrito
    When elimina el producto del carrito
    Then el carrito contiene una fila menos

    Examples:
      | categoria |
      | Laptops   |