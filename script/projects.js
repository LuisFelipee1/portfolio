const app = angular.module('my-portfolio', []);

app.controller('projectsController', function ($scope, $element) {
    let currentIndex = 0;

    // Obtenha a referência ao elemento do slide
    const slides = $element[0].querySelector('.carrossel-slide');
    const totalSlides = slides.children.length;
    
    $scope.updateSlidePosition = function () {
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
      console.log(offset);
      console.log(currentIndex);
    }
    
    $scope.prevSlide = function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1;
      }
      $scope.updateSlidePosition();
    }
    
    $scope.nextSlide = function () {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      $scope.updateSlidePosition();
    }


    let currentIndexSNK = 0;


    const slidesSNK = $element[0].querySelector('.carrossel-slideSNK');
    const totalSlidesSNK = slidesSNK.children.length;
    
    $scope.updateSlidePositionSNK = function () {
      const offset = -currentIndexSNK * 100;
      slidesSNK.style.transform = `translateX(${offset}%)`;
      console.log(offset);
      console.log(currentIndexSNK);
    }
    
    $scope.prevSlideSNK = function () {
      if (currentIndexSNK > 0) {
        currentIndexSNK--;
      } else {
        currentIndexSNK = totalSlidesSNK - 1;
      }
      $scope.updateSlidePositionSNK();
    }
    
    $scope.nextSlideSNK = function () {
      if (currentIndexSNK < totalSlidesSNK - 1) {
        currentIndexSNK++;
      } else {
        currentIndexSNK = 0;
      }
      $scope.updateSlidePositionSNK();
    }

    $scope.goToHome = () => {
        location.href = '../index.html';
    }
});
