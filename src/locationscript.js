src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeE6gO-CYe-YvZEj4fIGJCSGuRdBmg5zs&callback=initMap&libraries=&v=weekly"
        async

function initMap(){
  var options = {
    zoom:10.7,
    center: { lat: -20.25, lng:57.6}
  }


  var map= new google.maps.Map(document.getElementById('map'), options);

  addMarker ({lat: -20.2732, lng:57.4976});
  addMarker ({lat: -20.0230, lng:57.5865});
  addMarker ({lat: -20.5181, lng:57.5264});
  addMarker ({lat: -20.3378, lng:57.3751});
  addMarker ({lat: -20.2029, lng:57.7289});
  addMarker ({lat: -20.3620, lng:57.7056});
  addMarker ({lat: -20.4500, lng:57.3167});
  addMarker ({lat: -20.1609, lng:57.5012});
  addMarker ({lat: -20.0905, lng:57.6949});


  function addMarker(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map:map,
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsSAAALEgHS3X78AAAE50lEQVR42u2cMa7UMBBA/xFyhBwhDSWSJVqK7WlSUYceIZeUOQFyhSh9BBccIBV1REkVThASNP4ahnHi5Dtrb+JitBu+7XVexuOZ8YSncRyfsuyXDCEDzAAzwAwwSwZ4SoC/3rwqZskA98GrJxkmKRfaVJPo+TMD/BdMOck4SbfQRkKbWcTG8dtJ+nn8eZwdq6IO9dCO1L7RThImLUIAJP2s1J7gDOrzGx5CGQ0gTEqCJowwIQnLciQTtn+voS/+2zyOmqTx+E3bR4OJGH20EM3Rynf4VDEBNnDjHaMVWBSAray2EYAN1kZkPw1cK/j+2baDMXq4voEo3I/Mk87ph32o0ZcwaNANbNNAJtrBv9d4R0btBgK6ZLTWfv+Ivpeo72vmd583MOYBf8PXUQEibRk9pLMQOS1lbBy98U/Y7iFtVgi2Qm1uzG/Nc/2ZBEBYknRyhrnGgCWnZWhM3L8ifWvSz5ClTEUyc/xKrnVsG4gn2zI3McCNa6RVwrWTMgDxUhZkuQsC0I6tsR0kGt1v3cGPBGhAKnJzhnvKyNDfHG0rpi9uJzjXB/UZyEOkD0WF1L4QAEtk0zRejvCkB87OUB8Q2bq5/ReHDWyJNkk0HqfRPZpbxWifDhFmhnSeDUxSE+38uzM7Nh4NDwEDeAumoUHOr0Q7qm3bkDHx0m05OMhFKpML5WDSJQ237MQ9+qul0O+KyQS55CKA5rXI1Sg2bFxmawQB2teETlwcCVDgeHghJNuaDBj3hGDIRo9JLuEFgLdQAImtlFs2AbShdY+igcUSIBotMMtbwBgluhbEqbZOukD9GoArmPTaiDa3F/uA98hIP7sfCxGMYMAPyI3pHEkHTWDWjCvTAnSXb9k8AkCzshSFR74Pp8r+i2BIYmEg/t57EhWpkK7M0QA7Ll20AtCV5jJMJFGjCMcCKkgG5h0CalD7IEcJRwM0nCuzAnB0xMySWYo1yYBjgAY9BEMyPruOEqIBpE+aArQpf8aOaaKNHckhDmBPqwVNxfF1S9qWj2ADt9g5nCmmyVZBwOIEQkFg03SXYdJt/SPYwNERty4lXD/Ap0EaSTPVNKeoAKI9retxPOzYoZtHACipT4biXhv0N762CGd/iCZXnnPp9hyFnrq0I8RGkGtjMsAM8KjyEEGkyADXj0j1yjFpR5O3lwcI4HrPs2Va8VBeFiBT8LNXmssBZA7NXyrqMgAPgBcNYqxl2x0AL8pyjgGwPRBe8EOjpAAyRUUuGVA6vkKpLu3Z35wVoPJ0TYqVkzkfl6c6I8AhxCYAdnQNYnsqgKQi68XLzlFQxNYcngWgXLlhcYBJKM4EUIfWFg+tFmcCaELvmh67ega44dwlA3xBAdMlAAY3+I4XaO7qC94T4NrNyh1jLvqCZ3NjKo/wrQoYU+szRiJrWZje84y38Qjl6jMCrD0TCY2jyr70TCgM9zqAipHO6jdkZOwrDmpjDlGeOR9YH5wLHO55/Bkrpd/njHSYCv7Q0t/7XmKeypkDAIorASwDn8zpGPcR+2BdPuLGkVRpR6Ajzttla2M8Qrwkl25qxUXNoy3d5Mrbdu7Kt9jzTglgsXFXblOYd3IF477//0yuUN3v2gypVKcmWyO9krISKc01VYCuErgmtbmmXKVPizBVivNM/S2kyr4ult8TyS/aZMkAM8D05A/TmSt74tE92wAAAABJRU5ErkJggg=='
    });

    var infoWindow = new google.maps.InfoWindow({
      content: '<h2>Kafe Lakot Store</h2>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map,marker);
    });
  }
}
